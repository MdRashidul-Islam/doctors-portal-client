import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import img from "../../assets/images/appointment-bg.png";
import PrimaryButton from "../../shared/PrimaryButton";

const ContactBg = {
  background: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginTop: 175,
  height: "600px",
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
};

const Contact = () => {
  return (
    <ContactStyled style={ContactBg}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#5FC7C7",
          fontSize: "26px",
          fontWeight: "bold",
          paddingTop: "20px",
        }}
      >
        CONTACT US
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#ffff",
          fontSize: "31px",
          fontWeight: "bold",
        }}
      >
        Always Connect with us
      </Typography>
      <div className="form_section">
        <div className="form">
          <form
            action="https://formsubmit.co/rashidulrony79775@gmail.com"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  .form_section {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      width: 500px;
      @media (max-width: 700px) {
        width: 100%;
        padding: 0 20px;
      }
      form {
        display: flex;
        flex-direction: column;
        input {
          border: none;
          width: 100%;
          height: 40px;
          margin-bottom: 16px;
          border-radius: 3px;
        }
        textarea {
          border: none;
          width: 100%;
          min-height: 110px;
          margin-bottom: 16px;
          border-radius: 3px;
        }
      }
    }
  }
`;

export default Contact;
