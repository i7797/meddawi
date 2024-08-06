import React from "react";
import "../assets/css/Style.css";
import "../assets/css/MediaQuery.css";
import NavBar from "../components/common/NavBar";
import Drawer from "../components/common/Drawer";
import HeroSectio from "../components/HeroSectio";
import FinalService from "../components/containers/FinalService";
import Team from "../components/containers/Team";
import Footerr from "../Footerr";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen w-screen Homecontent ">
        <div className="lg:hidden ">
          <Drawer />
        </div>

        <div className="hidden md:block col-span-12 ">
          <NavBar />
        </div>

        <section id="homeSection" className=" homeSection lg:block col-span-12">
          <HeroSectio />
        </section>

        <section
          id="serviceSection"
          className=" serviceSection hidden lg:block col-span-12"
        >
          <FinalService />
        </section>
        <section
          id="teamSection"
          className=" teamSection hidden lg:block col-span-12"
        >
          <Team />
        </section>
        <section
          id="footerSection"
          className="footerSection  hidden lg:block col-span-12"
        >
          <Footerr />
        </section>
      </div>
    </>
  );
}
