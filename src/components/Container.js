import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./Header";
import Form from "./Form";
import MyPage from "./MyPage/MyPage";
import ReactAudioPlayer from "react-audio-player";

const FixedContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <MyPage />
        </Box>
      </Container>
    </>
  );
};

export default FixedContainer;
