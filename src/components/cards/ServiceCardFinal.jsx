import React from "react";
import {useTranslation} from "react-i18next"

function ServiceCardFinal({ data }) {
  const { i18n,t}=useTranslation();

  return (
    <div
      key={data.id}
      className=" bg-[#F7F7F7] border-2 flex flex-col items-center justify-between w-full md:w-auto lg:w-auto xl:w-auto mb-8 p-6 rounded-2xl shadow-xl "
    >
      <div className="image w-64 h-64 border-gray border-2 self-center rounded-2xl mb-4 bg-blue-950 flex justify-center md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover rounded-2xl md:rounded-none lg:rounded-2xl xl:rounded-2xl"
        />
      </div>
      <div className="text text-center p-3">
        <h2 className="title text-2xl text-pink-400 font-extralight mb-2">
          {t(data.title)}
        </h2>
        <p className=" text-gray-700 font-extralight">
          {t(data.text)}
        </p>
      </div>
    </div>
  );
}

export default ServiceCardFinal;
