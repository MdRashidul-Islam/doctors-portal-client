import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import Calender from "../../shared/Calender";
import Navigation2 from "../../shared/Navigation2";

const background = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
};

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <AppointmentHeaderStyled style={background}>
      <Navigation2 />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" sx={{ m: 2 }}>
              Appointment
            </Typography>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={chair} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </AppointmentHeaderStyled>
  );
};

const AppointmentHeaderStyled = styled.div`
  margin-bottom: 50px;
  @media (max-width: 700px) {
    margin-bottom: 250px;
  }
`;

export default AppointmentHeader;
