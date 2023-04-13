import {IconButton } from "@mui/material";

const SocialAuth = () => {
  return (
    <>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.9rem",
            flex: 1,
            width:"100%"
          }}
        >
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" width="25" 
     height="25"alt="Google" />
        </IconButton>
    </>
  );
};

export default SocialAuth;
