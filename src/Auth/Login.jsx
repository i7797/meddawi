import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectpath = location.state?.path || "/";

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.login(user, password);

    navigate(redirectpath, { replace: true });
  };
  return (
    <div className="divlogin">
      <label className="label">
        user name :{" "}
        <input
          className="input"
          type="text"
          placeholder="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>

      <label className="label">
        user password :{" "}
        <input required
          className="input"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="login" type="button" onClick={handleLogin}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};