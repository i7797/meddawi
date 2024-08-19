import { Link } from "react-router-dom";
import { useAuth } from "../../Sign/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { currentUser, logout } = useAuth();
  const { i18n, t } = useTranslation();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleArEn = () => {
    const newlanguage = i18n.language == "en" ? "ar" : "en";
    i18n.changeLanguage(newlanguage);
  };

  return (
    <>
      <div class=" text-blue-950  lg:fixed lg:block lg:top-0 lg:inset-x-0 lg:bg-gray-200  lg:bg-opacity-60 lg:backdrop-blur-sm lg:z-50 lg:px-4 lg:justify-between lg:items-center">
        <div className=" hidden lg:block ">

          <ul className=" justify-between  whitespace-nowrap  lg:flex px-5  inline-flex m-3 gap2 text-[15px]   w-full">
            <div className="flex  mt-4">
            <li className="  hidden lg:block  text-xl rounded-[25px]  px-4  py-2  h-10 text-center w-[30px] lg:w-36  font-extralight">
              Conect Us
            </li>
            <div className="justify-start flex px-4">
              <button
                onClick={toggleArEn}
                className=" text-white bg-gradient-to-r  from-pink-400 to-[#CA5050]  text-xl  rounded-xl px-4  py-2 w-[130px]  h-10 text-center lg:w-full  font-extralight"
              >
                {i18n.language === "en" ? t("Arabic") : t("English")}
              </button>
            </div>

            {currentUser ? (
              <>
                <li
                  className=" text-white bg-gradient-to-r  from-pink-400 to-[#CA5050]  text-xl  rounded-xl  px-4  py-2 w-[130px]  h-10  lg:w-full text-center font-extralight"
                  onClick={handleLogout}
                >
                  {t("Logout")}{" "}
                </li>
              </>
            ) : (
              <Link to="/signup">
                <li className="  text-white bg-gradient-to-r  from-pink-400 to-[#CA5050]  text-xl  rounded-xl  px-4  py-2 w-[130px]  h-10 text-center  lg:w-full font-extralight">
                  {t("Login")}
                </li>
              </Link>
            )}
</div>
            <br>
            </br>
            <div class="   justify-end text-end hidden  font-extralight text-4xl  lg:block">
              {"Meddawi"}{" "}
            </div>
          </ul>



          <div className="hidden  lg:justify-end ml-10   lg:inline-flex   w-full lg:h-[30%]">
            <div className=" lg:inline-flex justify-end mr-10 items-center  w-[80%]">
              <nav>
                <ul className="whitespace-nowrap     font-extralight text-xl inline-flex mb-3  mr-3  gap2 text-[15px]  space-x-5 items-center justify-start w-full">
                 

                  
                    <li className=" text-xl rounded-[25px] p-3  w-[130px] lg:w-full text-center ">
                    <a  href='#team'> {t('Team')}</a>
                    </li>
                  


                    <li className="  text-xl rounded-[25px] p-3  w-[130px] lg:w-full text-center ">
                     <a  href='#service'>  {t('Services')}</a>
                    </li>

                  <Link to="/aboutUs">
                    <li className=" hidden lg:block  text-xl rounded-[25px] p-3  w-[130px] lg:w-full text-center ">
                    <a href='#aboutus' >  {t("About")} </a>
                    </li>
                  </Link>

                    <li className="  text-xl rounded-[25px] px w-[130px] lg:w-full text-center">
                     <a href='#home' > {t('Home')} </a>
                    </li>
                </ul>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
