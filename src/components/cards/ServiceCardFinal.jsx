import React from "react";

function ServiceCardFinal({ data }) {
  return (
    <>
      <div
        key={data.id}
        className="service-card  bg-[#F7F7F7] md:bg-[#323868] lg:bg-[#323868]  border-2 flex flex-col items-center justify-between w-full md:w-auto lg:w-auto mb-8 p-6 rounded-2xl  shadow-xl"
      >
        <div className="image w-64 h-64 border-gray border-2  self-center rounded-2xl mb-4 bg-white flex justify-center md:mb-6 md:rounded-none md:border-0 lg:mb-6 lg:rounded-none lg:border-0 ">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover rounded-2xl md:rounded-none lg:rounded-none "
          />
        </div>
        <div className="text text-center p-3 ">
          <h2 className="title text-2xl text-pink-400 font-bold  mb-2">
            {data.title}
          </h2>
          <p className=" description  text-gray-700 md:text-white  lg:text-white mb-4 ">
            {data.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceCardFinal;
