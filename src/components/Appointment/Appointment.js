import React from "react";
import AppointmentHeader from "./AppointmentHeader";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
