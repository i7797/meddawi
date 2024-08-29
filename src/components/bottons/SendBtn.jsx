import React from "react";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Msg from "../common/Msg";
import "../../assets/css/Style.css";
import "../../assets/css/MediaQuery.css";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../Sign/AuthContext";

function SendBtn() {
  const { i18n, t } = useTranslation();
  const { currentUser } = useAuth();
  const notify = () =>
    toast(<Msg />, {
      style: {
        height: "100%",
        backgroundColor: "#181D3D",
      },
    });
  return (
    <div className="SendBtn flex w-full justify-center items-center">
      {currentUser ? (
        <>
          <Button
            sx={{
              backgroundColor: "#181D3D",
              fontSize: 20,
              marginBottom: "20px",
            }}
            className="w-1/2 "
            variant="contained"
            type="submit"
          >
            {t("order")}
          </Button>
          <ToastContainer
            className="ToastContainer"
            position="bottom-center"
            rtl={true}
            autoClose={6000}
          />
        </>
      ) : (
        <p className=" hidden ">
          {" "}
               </p>
      )}
    </div>
  );
}

export default SendBtn;
