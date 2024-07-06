import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
   
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بك في رياكت و رياكت اي 18 نكست"
        }
      }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

function Translate() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}
export default Translate;

