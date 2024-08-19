import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Style.css"
import {useTranslation} from "react-i18next"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

function TeamCard({ data }) {
  const { i18n,t}=useTranslation();

  const CustomPrevArrow =(props)=>(
  <div {...props}
  style={{ ...props.style , color:'blue'}}
  className="slick-prev"
     >
      <i className="fas fa-chevron-left"> </i>
     </div>

);

const CustomNextArrow =(props)=>(
  <div {...props}
  style={{ ...props.style , color:'blue'}}
  className="slick-next"
     >
      <i className="fas fa-chevron-right"> </i>
     </div>
);


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (

    <div className="w-3/4   ">
      <div className="   ">
        <Slider {...settings}>
          
          {data.map((item,index) => (
            <div key={index} className="slick-slide-item mb-5 ">
            <div className="  bg-slate-200 h-[500px]   text-black rounded-xl">
              <div className="  h-56 rounded-t-xl bg-[#181D3D] flex justify-center items-center ">
                <img src={item.image} className="h-44 w-44 rounded-full border-slate-200	border-4" />
              </div>
              <div className=" flex  flex-col justify-center items-center gap-4 p-4 mt-10">
                <p className="text-sm font-extralight"> {t( "Name")   } : {item.title}</p>

                <p  className="text-sm font-extralight" > {t( "Age")   } : {item.age} {t("years-old")} </p>
                <p className="text-sm font-extralight"> {t( "Years of Experience")   } :  {item.years}</p>
                <div className=" mt-7 space-x-4">
                  <p className="text-center font-extralight mb-5"> Their works </p>
                 <a href="https://linkedin.com"> <LinkedInIcon/></a> 
                 <a href="https://www.facebook.com/">  <FacebookIcon/></a>
                 <a href="https://www.instagram.com/">  <InstagramIcon/></a>
                
                </div>

                
              </div>
            </div>
            </div>
          ))}
        
        </Slider>
      </div>
      
    </div>

  );
}

export default TeamCard;
