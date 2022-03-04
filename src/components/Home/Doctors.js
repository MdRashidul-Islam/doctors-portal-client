import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <DoctorsStyled>
      <Typography
        sx={{
          textAlign: "center",
          color: "#5FC7C7",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        OUR DOCTORS
      </Typography>

      <div className="doctors_container">
        {doctors.map((doctor) => (
          <div className="doctors" key={doctor._id}>
            <div className="main">
              <img src={doctor.img} alt="" />
              <h3 style={{ color: "#62C8C8", textAlign: "center" }}>
                {doctor.name}
              </h3>
              <h6>{doctor.qualification}</h6>
              <h6>{doctor.number}</h6>
              <p>{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </DoctorsStyled>
  );
};

const DoctorsStyled = styled.div`
  margin-top: 20px;
  .doctors_container {
    margin-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      padding-left: 0px;
      padding-right: 0px;
    }
    .doctors {
      margin: 5px;
      /* border: 1px solid lightgray; */
      box-shadow: 0px 0px 5px 5px whitesmoke;
      border-radius: 5px;
      .main {
        padding: 20px;
        height: 400px;
        width: 300px;
        img {
          width: 200px;
          display: block;
          margin: 0 auto;
        }
        h5,
        h6 {
          text-align: center;
          font-size: 14px;
        }
        p {
          font-size: 12px;
          text-align: justify;
        }
        @media (max-width: 700px) {
          padding: 20px;
          height: 450px;
          width: 100%;
          h5,
          h6 {
            font-size: 16px;
          }
          p {
            font-size: 14px;
            text-align: justify;
          }
        }
      }
    }
  }
`;

export default Doctors;
