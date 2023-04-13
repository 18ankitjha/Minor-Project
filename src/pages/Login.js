import React from "react";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import {fadeInUp,RootStyle,HeadingStyle,easing,ContentStyle} from './Login_style.js';

const Login = ({ setAuth }) => {
  return (
    <RootStyle >
      <Container maxWidth="sm" >
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
            </Typography>
          </HeadingStyle>

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
