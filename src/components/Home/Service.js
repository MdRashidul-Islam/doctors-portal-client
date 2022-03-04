import { CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import fluoride from "../../assets/images/fluoride.png";

const Service = () => {
  return (
    <ServiceStyled>
      <Container sx={{ marginTop: "150px", marginBottom: "100px" }}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#5FC7C7",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#203047",
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          Services We Provide
        </Typography>
        <Grid
          sx={{ textAlign: "center", marginTop: "20px" }}
          container
          spacing={2}
        >
          <Grid sx={{ p: 3 }} item xs={12} sm={12} md={4}>
            <CardMedia
              component="img"
              sx={{ width: "100px", margin: "0 auto" }}
              image={fluoride}
              alt="Paella dish"
            />
            <Typography
              sx={{ margin: "10px 0", color: "#203047", fontWeight: 500 }}
              variant="h5"
            >
              Fluoride Treatment
            </Typography>
            <Typography
              sx={{ color: "#CACACA", fontSize: "16px", fontWeight: 100 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              officiis repudiandae labore animi dolores praesentium nulla veniam
              accusamus nam numquam?
            </Typography>
          </Grid>

          <Grid sx={{ p: 3 }} item xs={12} sm={12} md={4}>
            <CardMedia
              component="img"
              sx={{ width: "100px", margin: "0 auto" }}
              image={fluoride}
              alt="Paella dish"
            />
            <Typography
              sx={{ margin: "10px 0", color: "#203047", fontWeight: 500 }}
              variant="h5"
            >
              Fluoride Treatment
            </Typography>
            <Typography
              sx={{ color: "#CACACA", fontSize: "16px", fontWeight: 100 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              officiis repudiandae labore animi dolores praesentium nulla veniam
              accusamus nam numquam?
            </Typography>
          </Grid>

          <Grid sx={{ p: 3 }} item xs={12} sm={12} md={4}>
            <CardMedia
              component="img"
              sx={{ width: "100px", margin: "0 auto" }}
              image={fluoride}
              alt="Paella dish"
            />
            <Typography
              sx={{ margin: "10px 0", color: "#203047", fontWeight: 500 }}
              variant="h5"
            >
              Fluoride Treatment
            </Typography>
            <Typography
              sx={{ color: "#CACACA", fontSize: "16px", fontWeight: 100 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              officiis repudiandae labore animi dolores praesentium nulla veniam
              accusamus nam numquam?
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ServiceStyled>
  );
};

const ServiceStyled = styled.div`
  @media (max-width: 688px) {
    margin-top: 350px;
  }
`;

export default Service;
