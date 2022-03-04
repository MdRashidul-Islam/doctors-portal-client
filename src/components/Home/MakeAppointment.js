import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import styled from "styled-components";
import appointment_bg from "../../assets/images/appointment-bg.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../../shared/PrimaryButton";

const appointmentBg = {
  background: `url(${appointment_bg})`,
  marginTop: 175,
  minHeight: 200,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
};

const MakeAppointment = () => {
  return (
    <MakeAppointmentStyled>
      <Box style={appointmentBg} sx={{ flexGrow: 1, marginBottom: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img className="img" style={{}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "#6ACECE", mb: 3 }} variant="h6">
              APPOINTMENT
            </Typography>
            <Typography
              className="title"
              sx={{ mt: 3, mb: 3, color: "white" }}
              variant="h4"
            >
              MAKE AN APPOINTMENT TODAY
            </Typography>
            <Typography sx={{ mb: 3, color: "white" }} variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, nihil officiis. Veritatis deleniti tempore quibusdam
              eligendi nobis quaerat, numquam architecto?
            </Typography>
            <PrimaryButton className="button">Learn More</PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </MakeAppointmentStyled>
  );
};

const MakeAppointmentStyled = styled.div`
  @media (max-width: 700px) {
    text-align: center;
    overflow-x: hidden;
    .title {
      font-size: 24px;
    }
    .button {
      margin-bottom: 20px;
    }
  }
  .img {
    width: 500px;
    margin-top: -128px;
    margin-bottom: -5px;
    @media (max-width: 700px) {
      width: 400px;
    }
  }
`;

export default MakeAppointment;
