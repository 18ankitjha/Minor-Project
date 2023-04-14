import React from "react";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import {fadeInUp,RootStyle,HeadingStyle,easing,ContentStyle} from './Login_style.js';
import classes from "./header.css";
import logo from "./logo.png";

const Login = ({ setAuth }) => {
  return (
    <RootStyle >
      <div className="container-top" >
        <div>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </div>
      <Typography className="login_text_container">
             <div className="login_text">
            | Mess Inventory System |
             </div>
            </Typography>

      <Container maxWidth="sm" >
        <ContentStyle>
          {/* <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
          </HeadingStyle> */}

          <Box component={motion.div} {...fadeInUp}>
            <SocialAuth />
          </Box>

          <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>


          <LoginForm setAuth={setAuth} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
