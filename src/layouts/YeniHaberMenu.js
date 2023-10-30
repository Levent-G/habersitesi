import { Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { createTheme } from '@mui/material/styles';
const YeniHaberMenu = (props) => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Raleway',
         
          ].join(','),
        },
      });

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    
    };
  
  return (
    <div className="bg-white ">
      <Typography theme={theme} className="float-left p-2 font-extrabold uppercase">
        Son Gelişmeler:-{props.countryName}
      </Typography>
      <Slider {...settings}>
        {props.data?.articles
          ? props.data?.articles.map((haber, index) => (
              <div className=" ellipsis whitespace-nowrap  p-2 max-w-[500px] ml-12">
                <Typography
                  theme={theme}
                  className="text-[#795548] bold float-left pr-1"
                >
                  #{haber?.author !== null ? (haber?.author):(haber?.source.name)}
                </Typography>
                <Typography
                  theme={theme}
                  className=" whitespace-nowrap overflow-hidden text-ellipsis"
                >
                 {haber?.title}
                </Typography>
              </div>
            ))
          : ""}
      </Slider>
    </div>
  );
}

export default YeniHaberMenu