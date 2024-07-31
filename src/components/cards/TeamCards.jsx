import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Style.css"

function TeamCard({ data }) { const CustomPrevArrow =(props)=>(
  <div {...props}
  style={{ ...props.style,color:'blue'}}
  className="slick-prev"
     >
      <i className="fas fa-chevron-left"> </i>
     </div>

);

const CustomNextArrow =(props)=>(
  <div {...props}
  style={{ ...props.style,color:'blue'}}
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

    <div className="w-3/4 m-auto  lg:mt-0 ">
      <div className="mt-20   ">
        <Slider {...settings}>
          {data.map((item,index) => (
            <div key={index} className="slick-slide-item">
            <div className="  bg-slate-200 h-[450px]  text-black rounded-xl">
              <div className="  h-56 rounded-t-xl bg-[#181D3D] flex justify-center items-center">
                <img src={item.image} className="h-44 w-44 rounded-full border-slate-200	border-4" />
              </div>
              <div className=" flex  flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">الاسم:{item.title}</p>

                <p>العمر:{item.age}</p>
                <p>سنوات الخبرة:{item.years}</p>

                <button className=" bg-[#181D3D] text-white text-lg px-6 py-1 rounded-xl">
                  
                  اقرأ المزيد
                </button>
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
