import React from "react";
import {useTranslation} from "react-i18next"

function ServiceCardFinal({ data }) {
  const { i18n,t}=useTranslation();

  return (
    <div
      key={data.id}
      className=" bg-[#F7F7F7] md:bg-[#323868] lg:bg-[#323868] xl:bg-[#323868] 2xl:bg-[#323868] border-2 flex flex-col items-center justify-between w-full md:w-auto lg:w-auto xl:w-auto mb-8 p-6 rounded-2xl shadow-xl"
    >
      <div className="image w-64 h-64 border-gray border-2 self-center rounded-2xl mb-4 bg-white flex justify-center md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover rounded-2xl md:rounded-none lg:rounded-2xl xl:rounded-2xl"
        />
      </div>
      <div className="text text-center p-3">
        <h2 className="title text-2xl text-pink-400 font-bold mb-2">
          {t(data.title)}
        </h2>
        <p className=" text-gray-700 md:text-white lg:text-white xl:text-white 2xl:text-white mb-4">
          {t(data.text)}
        </p>
      </div>
    </div>
  );
}

export default ServiceCardFinal;
