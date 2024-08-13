import { Link } from "react-router-dom";
import { useAuth } from "../../Sign/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function NavBar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const {t}=useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to homepage page after logout
  };

  return (
    <>
      <div class="  sm:bg-inherit md:bg-inherit lg:bg-[#181D3D] lg:text-white lg:p-4 lg:flex lg:justify-between lg:items-center">
        <div class=" hidden  font-serif text-3xl ml-10 lg:block">
        {"Meddawi"}        </div>
        <div className="hidden  lg:justify-end   lg:inline-flex   w-full lg:h-[30%]">
          <div className=" nav lg:inline-flex justify-center items-center  w-[80%]">
            <nav>
              <ul className="  inline-flex m-3 gap2 text-[15px]  items-center justify-center w-full">
                {currentUser ? (
                  <>
                    <li className="   rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center ">
                      <Link to="/profile">{t("Profile")}</Link>
                    </li>

                    <li
                      onClick={handleLogout}
                      className="  rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center "
                    >
   {t("Logout")}                    </li>
                  </>
                ) : (
                  <Link to="/signup">
                    <li className="   rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center ">
                    {t("Login")}                    </li>
                  </Link>
                )}
                <Link to="/team1">
                  <li className=""> {t("Medical Teams")}</li>
                </Link>

                <Link to="/services">
                  <li className="  rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center">
                  {t("Services")}                  </li>
                </Link>
                <Link to="/aboutUs">
                  <li className="hidden lg:block"> {t("About")}</li>
                </Link>

                <Link to="/">
                  <li className="hidden lg:block"> {t("Home")}</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
