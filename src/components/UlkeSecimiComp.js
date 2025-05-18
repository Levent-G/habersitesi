import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { country } from "../shared/haberEnums";
import { HaberContext } from "../context/haberContext";
import { actionTypes } from "../context/actionTypes";
import AutoCompleteItem from "./formInput/AutoCompleteItem";

const API_KEY = "2749c2e0a88f4967b816131fe4c75132";

const UlkeSecimiComp = () => {
  const { state, reducerDispatch } = useContext(HaberContext);

  const handleHaberService = async (value) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${value}&apiKey=${API_KEY}`
      );

      const data = await response.json();

      if (data.articles) {
        reducerDispatch({
          type: actionTypes.SET_NEWS,
          payload: data.articles,
        });
      }
    } catch (error) {
      console.error("Haberler alınırken hata oluştu:", error);
    }
  };

  const countryCustomChange = (value) => {
    reducerDispatch({
      type: actionTypes.SET_COUNTRY_NAME,
      payload: value,
    });

    handleHaberService(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
        display: "flex",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <AutoCompleteItem
        value={state?.countryName}
        onCustomChange={countryCustomChange}
        item={country}
      />
    </Box>
  );
};

export default UlkeSecimiComp;
