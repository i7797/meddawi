import React from "react";
import Drawer from "../components/common/Drawer";
import imge from "../assets/images/Medical care-pana.svg";
import "../assets/css/Style.css";
import NavBar from "../components/common/NavBar";

const AboutUs = () => {
  return (

    <>
   <div id="aboutus" className="bg-blue-950 top-0 mt-0 flex justify-between lg:hidden">
        <div className="lg:hidden w-10">
          <Drawer />
        </div>
        <h1 className="text-white mr-4 mt-5 font-mono"> Medawi</h1>
      </div>
      <div className=" hidden lg:block">
        <NavBar />
      </div>
   
    <div id="about" className="text-blue-950 lg:mt-28 px-4 py-8  text-center lg:flex  lg:justify-between lg:items-start  ">

      

      <div className="relative lg:w-1/2 lg:pr-8">
        <div className="cricle mt-4"> </div>
        <img className="w-full h-auto object-cover rounded-full" src={imge} />
      </div>
<div className=" lg:w-1/2 lg:pl-8 lg:text-center">


      <div className=" mb-6 mt-10">
        <h1 className=" text-3xl mb-4 text-bold ">Who We Are ? </h1>
        <p className="">
          At Meddawi, we are dedicated to providing compassionate and
          professional home health care services that enhance the quality of
          life for our paitents y.
        </p>
      </div>

    

      <div className=" mb-6">
        <h1 className=" text-3xl mb-4 text-bold ">What We Offer ?</h1>
        <p className="">
          We offer a wide range of home health care services, including skilled
          nursing, physical therapy, and assistance with daily living
          activities, all tailored to meet the unique needs of each client.
        </p>
      </div>

      <div className=" mb-6">
        <h1 className=" text-3xl mb-4 text-bold ">Why Choose Us ?</h1>
        <p className="">
          What sets us apart is our commitment to personalized care, and a
          holistic approach that addresses both the physical and emotional
          well-being of our clients.
        </p>
      </div>

      
      <div className=" mb-6">
        <h1 className=" text-3xl mb-4 text-bold ">Our Team !</h1>
        <p className="">
          Our team is composed of licensed, experienced caregivers, nurses, and
          healthcare professionals who are passionate about providing the best
          care possible.
        </p>
      </div>

      <div className=" mb-6">
        <h1 className=" text-3xl mb-4 text-bold ">Contact Us :) </h1>
        <p className="">
          We invite you to explore our services and contact us to see how we can
          help you or your loved one live a healthier, happier life at home.

          <div className=' flex space-x-4 mt-10 justify-center items-center lg:justify-center lg:items-center'>
          <a href='https://watsapp.com/'><i className="fab fa-twitter text-2xl">Watsapp</i>
          </a>
    <a href='https://facebook.com'><i className="fab fa-twitter text-2xl">Facebook</i>    </a>
    <a href='https://x.com/'><i className="fab fa-twitter text-2xl">X</i>
    </a>
    
    <a href='https://linkedin.com'> <i className="fab fa-linkedin-in text-2xl">linkedin</i>
    </a>
</div>
        </p>
      </div>

      </div>
    </div>


    </>
  );
};
export default AboutUs;
