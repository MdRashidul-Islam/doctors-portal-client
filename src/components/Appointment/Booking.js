import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../shared/PrimaryButton";
import BookingModal from "./BookingModal";

const Booking = ({ booking, date }) => {
  const { serviceName, schedule, availableSpace, price } = booking;

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={12} md={4}>
        <Paper elevation={1} sx={{ textAlign: "center", height: "220px" }}>
          <Typography
            sx={{
              color: "#1CC7C1",
              fontSize: "24px",
              fontWeight: "bold",
              pt: "10px",
            }}
          >
            {serviceName}
          </Typography>
          <Typography sx={{ fontWeight: "bold", pt: "10px" }}>
            {schedule}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: 400,
              pt: "8px",
            }}
          >
            {availableSpace} Available space
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
              fontWeight: 400,
              pt: "8px",
            }}
          >
            Price: {price}
          </Typography>

          <PrimaryButton
            onClick={handleBookingOpen}
            sx={{ p: "10px 10px", borderRadius: "0px", mt: "20px" }}
          >
            BOOK APPOINTMENT
          </PrimaryButton>
        </Paper>
      </Grid>

      <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        date={date}
      ></BookingModal>
    </>
  );
};

export default Booking;
