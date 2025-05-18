import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: 64, 
        bgcolor: "#42A5F5",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: 1.25, 
      }}
    >
      <Typography variant="body2" component="p">
        © Copyright 2023 MUSTAFA LEVENT GULSUM
      </Typography>
    </Box>
  );
}
