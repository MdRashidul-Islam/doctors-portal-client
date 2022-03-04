import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Booking from "./Booking";
import { useState } from "react";
import Spinner from "../../shared/Spinner";

const AvailableAppointments = ({ date }) => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://morning-garden-34433.herokuapp.com/availableAppointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <Container>
      <AvailableAppointmentsStyled>
        <Typography
          className="date"
          sx={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: "bold",
            color: "#1CC7C1",
            mt: "16px",
          }}
        >
          Available Appointments on {date.toDateString()}
        </Typography>
        {appointments.length ? (
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            {appointments.map((appointment) => (
              <Booking
                booking={appointment}
                date={date}
                key={appointment._id}
              ></Booking>
            ))}
          </Grid>
        ) : (
          <Spinner />
        )}
      </AvailableAppointmentsStyled>
    </Container>
  );
};

const AvailableAppointmentsStyled = styled.div`
  .date {
    @media (max-width: 700px) {
      font-size: 24px;
    }
  }
`;

export default AvailableAppointments;
