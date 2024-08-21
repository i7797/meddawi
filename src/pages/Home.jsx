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
import Front from "./Front";
import AboutUs from "./AboutUs";
export default function Home() {
  return (
    
    <>

  <div className="bg-blue-950 top-0 mt-0 flex justify-between lg:hidden">
<div className="lg:hidden   w-10">
          <Drawer />

        </div>
        <h1 className="text-white mr-4 mt-5 font-extralight text-lg"> Medawi</h1>

        </div>  
        <div className="hidden md:block col-span-12  ">
          <NavBar />
        </div>
      <div  id="home" 
      className="grid grid-cols-12 h-screen w-screen Homecontent  lg:mt-0">

        

        <section id="homeSection" className="  lg:block col-span-12">
          <HeroSectio />
      
        </section>
        
        <section id="offer" 
          className="  hidden lg:block col-span-12"
          >
        <Front/>
      
        </section>
       
        <section id="aboutus"
          className="  hidden lg:block col-span-12"
          >
        <AboutUs/>
      
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
          id="footer"
          className="hidden lg:block col-span-12"
        >
          <Footerr />
          
        </section>
        <Translate/>
      </div>
    </>
  );
}
