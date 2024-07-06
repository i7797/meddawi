import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
import i18nextOptions from "i18next";

import HttpApi from "i18next-http-backend";

i18next.use(HttpApi).init(i18nextOptions);
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "cookie",

        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: { loadPath: "/locale/{{lng}}/translation.json" },
  });

function Translate() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("Welcome to React")}</h2>;
      <h2>{t("p")}</h2>;

      <button
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        Ar
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        En
      </button>
    </>
  );
}

export default Translate;
