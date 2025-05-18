import React, { useContext } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { HaberContext } from "../context/haberContext";

const HaberlerComp = () => {
  const { state } = useContext(HaberContext);
  const { countryName, haberler } = state;

  return (
    <Box sx={{ flexGrow: 1, px: 5, pb: 10 }}>
      {/* ÜST ÇİZGİLER ve BAŞLIK */}
      <Grid container alignItems="center" spacing={2} sx={{ mb: 5 }}>
        <Grid item xs={5}>
          <Box sx={{ borderTop: 8, borderColor: "#42A5F5", width: "100%" }} />
        </Grid>
        <Grid item xs={2} textAlign="center">
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              px: 2,
              py: 3,
              whiteSpace: "nowrap",
            }}
          >
            HABERLER - {countryName}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              borderTop: 8,
              borderLeft: 8,
              borderColor: "#F57F17",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {haberler.map((haber, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
            <Box
              display="flex"
              sx={{ width: "100%" }}
            >
              <a
                href={haber?.url}
                style={{
                  textDecoration: "none",
                  width: "100%",
                  maxWidth: "545px",
                }}
              >
                <Card
                  sx={{
                    borderRadius: "16px",
                    ":hover": { opacity: 0.8 },
                    height: "100%", // kart boyunu parent'a göre uzatır
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    sx={{ height: 200, borderRadius: "16px 16px 0 0" }}
                    image={
                      haber?.urlToImage
                        ? haber.urlToImage
                        : "https://www.shutterstock.com/image-vector/mavi-modern-son-dakika-haber-260nw-2358979573.jpg"
                    }
                    title="haber görseli"
                  />
                  <CardContent sx={{ height: 160, overflow: "hidden" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="uppercase"
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {haber?.author || haber?.source.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {haber?.description || haber?.title}
                    </Typography>
                  </CardContent>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    px={2}
                    pb={2}
                    color="#F57F17"
                    fontSize={14}
                  >
                    <Typography>{haber?.publishedAt}</Typography>
                    <Typography>{haber?.source.name}</Typography>
                  </Box>
                </Card>
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HaberlerComp;
