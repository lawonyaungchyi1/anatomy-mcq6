import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "12vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px #370617",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#00171f",
          }}
        >
          Anatomy MCQ
        </Typography>
        <Typography
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#0b090a",
          }}
        >
          Created By - Ko Zo
        </Typography>
      </Box>
    </>
  );
};

export default Header;
