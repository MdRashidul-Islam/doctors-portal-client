import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import footerBg from "../assets/images/footer-bg.png";
import PrimaryButton from "./PrimaryButton";

const footerStyle = {
  background: `url(${footerBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "300px",
};

const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <Grid
          className="footer"
          sx={{ marginTop: "20px" }}
          style={footerStyle}
          container
          spacing={2}
        >
          <Grid sx={{ fontSize: "26px" }} item xs={12} sm={12} md={3}>
            <br />
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Emergency DentalCare
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Emergency DentalCare
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Treatment of Personal Disease
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
          </Grid>

          <Grid sx={{ fontSize: "26px" }} item xs={12} sm={12} md={3}>
            <Typography
              color="#62C8C8"
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Service
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Emergency DentalCare
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Treatment of Personal Disease
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Treatment of Personal Disease
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Treatment of Personal Disease
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
          </Grid>

          <Grid sx={{ fontSize: "26px" }} item xs={12} sm={12} md={3}>
            <Typography
              color="#62C8C8"
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Oral Health
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Emergency DentalCare
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Treatment of Personal Disease
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
            <Typography color="text.secondary" sx={{ marginTop: "10px" }}>
              Check Up
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography
              color="#62C8C8"
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Our Address
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontSize: "16px", marginTop: "10px" }}
            >
              Dhaka - Bangladesh
            </Typography>
            <Box sx={{ marginTop: "40px" }}>
              <FacebookRoundedIcon
                sx={{ color: "#62C8C8", fontSize: "40px", margin: "5px" }}
              />
              <GoogleIcon
                sx={{ color: "#62C8C8", fontSize: "40px", margin: "5px" }}
              />
              <TwitterIcon
                sx={{ color: "#62C8C8", fontSize: "40px", margin: "5px" }}
              />
            </Box>
            <Typography
              color="text.secondary"
              sx={{ fontSize: "16px", marginTop: "10px", marginBottom: "5px" }}
            >
              Call Now
            </Typography>
            <PrimaryButton className="button">+08801736919983</PrimaryButton>
          </Grid>
        </Grid>
      </FooterStyled>
    </Container>
  );
};

const FooterStyled = styled.footer`
  @media (max-width: 700px) {
    .footer {
      text-align: center;

      .button {
        margin-bottom: 20px;
      }
    }
  }
`;

export default Footer;
