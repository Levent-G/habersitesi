import React from "react";
import { Typography,Box,Grid,Card,CardContent,CardMedia} from '@mui/material'
import { createTheme } from '@mui/material/styles';


const HaberlerComp = (props) => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Raleway',
         
          ].join(','),
        },
      });
  console.log(props.data,"dataa111");
  return ( 
    <div>
   
        <Box sx={{ flexGrow: 1 }} className=" p-5 ">
          <div className="flex items-center">
            <div className="flex-grow border-t-8 border-[#42A5F5]"></div>
            <Typography theme={theme} variant="h5" className="mx-4 p-5 uppercase">
              HABERLER -{props.countryName}
            </Typography>
            <div className="flex-grow border-t-8 border-l-8 border-[#F57F17]"></div>
          </div>
          <Grid container spacing={2}>
            {props.data?.articles
              ? props.data?.articles.map((haber, index) => (
                  <>
                    <Grid item xs={12} md={6} className="mb-24">
                      <a href={ haber?.url} className="hover:bg-black">
                      <Card
                        sx={{ maxWidth: 545, borderRadius: "16px" }}
                        className="p-5 hover:opacity-80"
                      >
                        <CardMedia
                          sx={{ height: 240, borderRadius: "16px 16px 0 0" }}
                          image={haber?.urlToImage !== null ? (haber?.urlToImage ):("https://www.shutterstock.com/image-vector/mavi-modern-son-dakika-haber-260nw-2358979573.jpg")}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            theme={theme}
                            className="uppercase"
                          >
                              {haber?.author !== null ? (haber?.author):(haber?.source.name)}
                          </Typography>
                          <Typography variant="body2" theme={theme}>
                            {haber?.description !== null ? ( haber?.description):(haber?.title)}
                           
                          </Typography>
                        </CardContent>
                      

                        <Typography
                          className="float-left text-[#F57F17] "
                          theme={theme}
                        >
                           {haber?.publishedAt}
                        </Typography>
                        <Typography
                          theme={theme}
                          className="float-right text-[#F57F17]"
                        >
                           {haber?.source.name}
                        </Typography>
                      </Card>
                      </a>
                      
                    </Grid>
                  </>
                ))
              : ""}
           
          </Grid>
        </Box>
   
    </div>
  );
}

export default HaberlerComp