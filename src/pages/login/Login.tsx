import { CardMedia, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import cybellumSign from "assets/images/login/cybellum-sign.svg";
import monitor from "assets/images/login/imac-dig-twins.png";
import HoverButton from "components/ui/HoverButton";
import LoginForm from "./LoginForm";

const marginLinks = "40px";
/* 
  This is an expression to make the div always position well vertically
  527px the div height approximately
  This basically position the div in a 1:2 ratio from top to bottom
*/
const topPaddingDesktop = `calc((100vh - ${marginLinks} - 527px) / 3)`;

export default function Login() {
  const theme = useTheme();

  const bottomLinks = {
    "Privacy policy": "/privacy-policy",
    "Terms of use": "/terms-of-use",
    "Contact us": "/contact-us",
  };

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: `${topPaddingDesktop} 20px 0px 20px`,
            md: `${topPaddingDesktop} 0px 0px 91px`,
            xl: `${topPaddingDesktop} 0px 0px 182px`,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "start", md: "space-between" },
          gap: { xs: theme.spacing(15), md: "0px" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "inherit",
            gap: theme.spacing(9),
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(8),
              alignItems: "inherit",
            }}
          >
            <CardMedia
              component="img"
              alt="Cybellum"
              image={cybellumSign}
              sx={{ width: "150.192px", height: "55px" }}
            />
            <Typography
              variant="h1"
              sx={{
                whiteSpace: "pre",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Welcome to the <br />
              Product Security Platform
            </Typography>
          </Box>
          <LoginForm />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mb: marginLinks,
            width: { xs: "100%", md: "400px" },
          }}
        >
          {Object.keys(bottomLinks).map((link) => (
            <HoverButton key={link}>{link}</HoverButton>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", md: "flex" },
          flexDirection: "col",
          justifyContent: "center",
          margin: `calc(${topPaddingDesktop} / 2) auto`,
          padding: "0px 40px",
        }}
      >
        <CardMedia
          component="img"
          alt="Digital Twins"
          image={monitor}
          sx={{
            objectFit: "contain",
          }}
        />
      </Box>
    </>
  );
}
