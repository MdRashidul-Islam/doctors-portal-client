import React from "react";
import styled from "styled-components";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../../shared/PrimaryButton";

const ExceptionalDental = () => {
  return (
    <ExceptionalDentalStyled>
      <div className="main">
        <div className="left">
          <img src={treatment} alt="" />
        </div>
        <div className="right">
          <h1>
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et
            inventore eligendi odio fugit debitis officiis laborum, accusamus
            incidunt expedita voluptates voluptatum consequuntur sapiente fugiat
            perspiciatis pariatur, nemo perferendis nobis reprehenderit iure!
            Possimus quo voluptatem hic labore debitis recusandae adipisci,
            quaerat repellendus autem, cupiditate dolores maiores, voluptatum
            sunt? Omnis numquam eum est eos quis sunt beatae sint dolor laborum
            deserunt a quo, dolorum dignissimos expedita ipsam quia nostrum
            saepe reprehenderit accusamus obcaecati? Nisi quidem fugiat est in
            optio dolore perspiciatis! Impedit aliquid ab recusandae dolores,
            nostrum vitae, ducimus nam voluptas eum ratione minus, Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Nulla et inventore
            eligendi odio fugit debitis officiis laborum, accusamus incidunt
            expedita voluptates voluptatum consequuntur sapiente fugiat
            perspiciatis pariatur, nemo perferendis nobis reprehenderit iure!
            Possimus quo voluptatem hic labore debitis recusandae adipisci,
            quaerat repellendus autem, cupiditate dolores maiores, voluptatum
            sunt? Omnis numquam eum est eos quis sunt beatae sint dolor laborum
            deserunt a quo.
          </p>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
      </div>
    </ExceptionalDentalStyled>
  );
};

const ExceptionalDentalStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .main {
    display: flex;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }

    .left {
      width: 400px;
      height: 400px;
      img {
        width: 100%;
      }
      @media (max-width: 700px) {
        width: 100%;
        display: block;
        img {
          display: block;
          width: 100%;
          padding: 10px;
        }
      }
    }
    .right {
      width: 800px;
      margin-left: 30px;
      text-align: justify;
      h1 {
        font-size: 34px;
        color: #203047;
      }
      p {
        color: #c1c1c1;
        font-size: 16px;
        font-weight: 100;
      }
      button {
        margin-top: 18px;
      }
      @media (max-width: 700px) {
        display: block;
        margin-top: 100px;
        width: 100%;
        margin-left: 0px;
        padding: 10px;
        button {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
`;

export default ExceptionalDental;
