import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ServiceCardFinal({ data }) {
  const { i18n, t } = useTranslation();

  return (
    <>
    <Link to ="/askservice">
      <div className=" bg-white max-w-sm rounded-xl overflow-hidden shadow-lg  ">
        <div className="h-48 w-full ">
          <img
            className="h-full w-full object-cover"
            src={data.image}
            alt={data.title}
          />
        </div>
     

      <div className=" px-6 py-4 text-center ">
        <div className="text-pink-400 font-extralight text-xl mb-2">
          {t(data.title)}
        </div>
        <p className="text-blue-950 font-extralight">{t(data.text)}</p>
      </div>
      </div>
      </Link>
    </>
  );
}

export default ServiceCardFinal;
