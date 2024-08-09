import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import NavBar from "../components/common/NavBar";
import Drawer from "../components/common/Drawer";
import HeroSectio from "../components/HeroSectio";
import FinalService from "../components/containers/FinalService";
import Team from "../components/containers/Team";
import Footerr from "../Footerr";
import "../assets/css/Style.css";
import Translate from "../Translate";
import Dashboard from "../components/Dashboard/Dashboard"
export default function Home() {
  return (
    
    <>
      <div  id="home" className="grid grid-cols-12 h-screen w-screen Homecontent  lg:mt-0">

        <div className="lg:hidden ">
          <Drawer />
        </div>

        <div className="hidden md:block col-span-12  ">
          <NavBar />
        </div>
        

        <section id="homeSection" className="  lg:block col-span-12">
          <HeroSectio />
      
        </section>

        <section
          id="serviceSection"
          className="  hidden lg:block col-span-12"
        >
          <FinalService />
        </section>
        <section
          id="teamSection"
          className="  hidden lg:block col-span-12 "
        >
          <Team />
        </section>
        <section
          id="footerSection"
          className="hidden lg:block col-span-12"
        >
          <Footerr />
          
        </section>
        <Translate/>
          <Dashboard/>
      </div>
    </>
  );
}
