import { Link } from "react-router-dom";
import { useAuth } from "../../Sign/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to sign-in page after logout
  };

  return (
    <>
      <div className="Nab-bg hidden  lg:inline-flex  lg:bg-inherit lg:h-[20%]">
        <div className=" nav flex  w-[95%]  h-[40%]  justify-center  items-center  rounded-[40px]  mt-[40px] lg:flex-row-reverse ">
          <nav> 
            <ul className=" items inline-flex m-3 gap2 text-[15px]   w-[100%] items-center justify-center">
              {currentUser ? (
                <>
                  <li className=" item bg-[#181D3D] rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center ">
                    <Link to="/profile">البروفايل</Link>
                  </li>

                  <li
                    onClick={handleLogout}
                    className=" item bg-[#181D3D] rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center "
                  >
                    تسجيل خروج
                  </li>
                </>
              ) : (
                <Link to="/signup">
                  <li className=" item  rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center ">
                    تسجيل دخول{" "}
                  </li>
                </Link>
              )}
              <Link to="/team1">
                <li className="">
                  الفرق الطبيه
                </li>
              </Link>

              <Link to="/service">
                <li className="item bg-[#181D3D] rounded-[25px] p-3 text-white w-[130px] lg:w-full text-center">
                  الخدمات
                </li>
              </Link>

              <Link to="/home">
                <li className="hidden lg:block">الصفحه الرئيسية</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
