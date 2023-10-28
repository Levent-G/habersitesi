import React, { useEffect,useState} from "react";
import { Typography,Box,Grid,Card,CardActions,CardContent,CardMedia,Button } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import { HaberAction } from "../redux/actions/HaberAction";

const HaberlerComp = () => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Raleway',
         
          ].join(','),
        },
      });
  

    const state = useSelector((state) => state.haberData);
    const dispatch = useDispatch();
    const [sportsData, setSporstData] = useState([]);
    const [generalData, setGeneralData] = useState([]);
    const [isData, setIsData] = useState([]);
    useEffect(() => {
      dispatch(HaberAction());  
    }, [ dispatch]);

    useEffect(()=>{
      const sportFiltre = state.haberData?.sources.filter(item =>item.category === "sports") 
      setSporstData(sportFiltre)

      const generalFiltre = state.haberData?.sources.filter(item =>item.category === "entertainment")
      setGeneralData(generalFiltre)

      const isFiltre = state.haberData?.sources.filter(item =>item.category === "technology") 
      setIsData(isFiltre)
      console.log("dataaa",sportsData,generalData,isData); 
    },[])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className=" p-5 ">
        <div className="flex items-center">
          <div className="flex-grow border-t-8 border-[#42A5F5]"></div>
          <Typography theme={theme} variant="h5" className="mx-4 p-5">
            SPORTS
          </Typography>
          <div className="flex-grow border-t-8 border-l-8 border-[#F57F17]"></div>
        </div>
        <Grid container spacing={2}>
          {sportsData
            ? sportsData.map((haber, index) => (
                <>
                  <Grid item xs={12} md={6} className="mb-24">
                    <Card
                      sx={{ maxWidth: 545, borderRadius: "16px" }}
                      className="p-5"
                    >
                      <CardMedia
                        sx={{ height: 240, borderRadius: "16px 16px 0 0" }}
                        image="https://static.politico.com/2b/2c/5bf95ea44d3c9dda531489267ed7/gettyimages-1749105548-1.jpg"
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
                          {haber?.category}
                        </Typography>
                        <Typography variant="body2" theme={theme}>
                          {haber?.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          theme={theme}
                          className="float-right"
                        >
                          {haber?.url}
                        </Button>
                      </CardActions>

                      <Typography
                        className="float-left text-[#F57F17] "
                        theme={theme}
                      >
                        Country: {haber?.country}
                      </Typography>
                      <Typography
                        theme={theme}
                        className="float-right text-[#F57F17]"
                      >
                        {haber?.name}
                      </Typography>
                    </Card>
                  </Grid>
                </>
              ))
            : ""}
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-grow border-t-8 border-[#42A5F5]"></div>
              <Typography theme={theme} variant="h5" className="mx-4 p-5">
                GENERAL
              </Typography>
              <div className="flex-grow border-t-8 border-l-8 border-[#F57F17]"></div>
            </div>
          </div>

          {generalData
            ? generalData.map((haber, index) => (
                <>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{ maxWidth: 545, borderRadius: "16px" }}
                      className="p-5"
                    >
                      <CardMedia
                        sx={{ height: 240, borderRadius: "16px 16px 0 0" }}
                        image="https://static.politico.com/2b/2c/5bf95ea44d3c9dda531489267ed7/gettyimages-1749105548-1.jpg"
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
                          {haber?.category}
                        </Typography>
                        <Typography variant="body2" theme={theme}>
                          {haber?.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          theme={theme}
                          className="float-right"
                        >
                          {haber?.url}
                        </Button>
                      </CardActions>

                      <Typography
                        className="float-left text-[#F57F17] "
                        theme={theme}
                      >
                        Country: {haber?.country}
                      </Typography>
                      <Typography
                        theme={theme}
                        className="float-right text-[#F57F17]"
                      >
                        {haber?.name}
                      </Typography>
                    </Card>
                  </Grid>
                </>
              ))
            : ""}

          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-grow border-t-8 border-[#42A5F5]"></div>
              <Typography theme={theme} variant="h5" className="mx-4 p-5">
                BUSINESS
              </Typography>
              <div className="flex-grow border-t-8 border-l-8 border-[#F57F17]"></div>
            </div>
          </div>

          {isData
            ? isData.map((haber, index) => (
                <>
                  <Grid item xs={12} md={6}> 
                    <Card
                      sx={{ maxWidth: 545, borderRadius: "16px" }}
                      className="p-5"
                    >
                      <CardMedia
                        sx={{ height: 240, borderRadius: "16px 16px 0 0" }}
                        image="https://static.politico.com/2b/2c/5bf95ea44d3c9dda531489267ed7/gettyimages-1749105548-1.jpg"
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
                          {haber?.category}
                        </Typography>
                        <Typography variant="body2" theme={theme}>
                          {haber?.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          theme={theme}
                          className="float-right"
                        >
                          {haber?.url}
                        </Button>
                      </CardActions>

                      <Typography
                        className="float-left text-[#F57F17] "
                        theme={theme}
                      >
                        Country: {haber?.country}
                      </Typography>
                      <Typography
                        theme={theme}
                        className="float-right text-[#F57F17]"
                      >
                        {haber?.name}
                      </Typography>
                    </Card>
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