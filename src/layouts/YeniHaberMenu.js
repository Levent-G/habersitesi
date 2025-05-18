import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HaberContext } from "../context/haberContext";
import { settings } from "../shared/haberEnums";
const YeniHaberMenu = () => {
  const { state } = useContext(HaberContext);
  const { haberler } = state;

  return (
    <Box m={2}>
      <Slider {...settings}>
        {haberler.map((haber) => (
          <>
            <Typography className="text-[#795548] bold float-left pr-1">
              #{haber?.author !== null ? haber?.author : haber?.source.name}
            </Typography>

            <Typography className=" whitespace-nowrap overflow-hidden text-ellipsis">
              {haber?.title}
            </Typography>
          </>
        ))}
      </Slider>
    </Box>
  );
};

export default YeniHaberMenu;
