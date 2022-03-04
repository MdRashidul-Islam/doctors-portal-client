import React from "react";
import styled from "styled-components";

const CardPaper = ({ icon, title, subtitle, color }) => {
  return (
    <CardPaperStyled>
      <div style={{ background: `${color}` }} className="card_paper">
        <div className="icon">{icon}</div>
        <div className="info">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </CardPaperStyled>
  );
};

const CardPaperStyled = styled.div`
  .card_paper {
    height: 120px;
    width: 380px;
    /* background: #1cc7c1; */
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 10px;
    border-radius: 3px;
    padding: 20px;
    .icon {
    }
    .info {
      margin-left: 30px;
    }
    @media (max-width: 688px) {
      width: 95%;
      margin-top: 10px;
    }
  }
`;

export default CardPaper;
