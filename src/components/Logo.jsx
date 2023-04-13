import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="https://www.nitj.ac.in/physics/issmd2020/images/logo_250.png" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
