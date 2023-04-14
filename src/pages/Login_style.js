import styled from "@emotion/styled";
import { Box } from "@mui/system";

const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    height: "100%",
    display: "grid",
    placeItems: "center",
    backgroundImage:"url()",
    backgroundSize:"100% 100%",
  });
  
  const HeadingStyle = styled(Box)({
    textAlign: "center",
  });
  
  const ContentStyle = styled("div")({
    maxWidth: 480,
    padding: 5,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  });
  
  let easing = [0.6, -0.05, 0.01, 0.99];
  
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  
export {fadeInUp,RootStyle,HeadingStyle,easing,ContentStyle};