import React from "react";
import { useState } from "react";
import "../../assets/css/Style.css";
import SendBtn from "../bottons/SendBtn";
import { useTranslation } from "react-i18next";
import {
  FormControl,InputLabel,MenuItem,Select,TextField,} from "@mui/material";
import axios from "axios";
import { useAuth } from "../../Sign/AuthContext";

function AskServiceForm() {
  const { i18n, t } = useTranslation();
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    NumberOFvisits: "",
    Chooestheservice: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting data:", formData);
      const response = await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:bpZzgRy-/dailyservicePost",
        formData
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className=" w-full h-[70%]  flex flex-col mt-6 gap-[20px] lg:w-1/2 lg:justify-center">
      {currentUser ? (
        <>
          <p className=" hidden "> </p>
        </>
      ) : (
        <h1 className="text-center text-blue-950">{t("youshould")}</h1>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex mt-0 flex-col gap-5 w-full items-center"
      >
        <TextField
          className="inputText mt-0 w-[70%] border-solid border-2 border-[#181D3D] "
          type="text"
          name="name"
          id="outlined-basic"
          label={t("Name")}
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          className="w-[70%]"
          name="phone"

          label={t("Phone-Number")}
          type="text"
          minRows={0}
          maxRows={11}
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          className="w-[70%]"
          name="NumberOFvisits"

          label={t("Number-of-visits")}
          type="number"
          variant="outlined"
          value={formData.NumberOFvisits}
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-basic"
          className="w-[70%]"
          name="address"

          label={t("Address")}
          type="string"
          variant="outlined"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <FormControl variant="outlined" className="w-[70%]">
          <InputLabel id="health-case-label">
            {t("Chooestheservice")}
          </InputLabel>
          <Select
            labelId="health-case-label"
            name="Chooestheservice"

            value={formData.Chooestheservice}
            onChange={handleChange}
            label={t("Chooestheservice")}
          >
            <MenuItem value="pressure">{t("bloodPressure-title")}</MenuItem>
            <MenuItem value="suger">{t("sugar-title")}</MenuItem>
            <MenuItem value="cannula">{t("cannula-title")}</MenuItem>
            <MenuItem value="injection">{t("injection-title")}</MenuItem>
            <MenuItem value="burn">{t("hand-title")}</MenuItem>
            <MenuItem value="suture">{t("suture-title")}</MenuItem>
          </Select>
        </FormControl>

        <SendBtn />
      </form>
    </div>
  );
}

export default AskServiceForm;
