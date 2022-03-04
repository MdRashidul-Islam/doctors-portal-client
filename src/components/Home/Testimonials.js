import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import { Rating, Typography } from "@mui/material";
import Spinner from "../../shared/Spinner";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <div style={{ marginLeft: "60px" }} className="header">
        <Typography
          sx={{ fontSize: "26px", fontWeight: "bold", color: "#6FCFCF" }}
        >
          Testimonial
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "#203047",
          }}
        >
          What's Our Patients <br /> Says{" "}
        </Typography>
      </div>

      {reviews.length === 0 ? (
        <Spinner />
      ) : (
        <TestimonialStyled>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="card">
                  <div className="card_info">{review?.message}</div>
                  <div className="card_header">
                    <div className="image">
                      <img
                        src={`data:image/png;base64,${review?.image}`}
                        alt=""
                      />
                    </div>

                    <div className="name_work">
                      <h5 style={{ color: "#62C8C8" }}>{review?.name}</h5>
                      <h5 style={{ color: "#B3B1BB" }}>{review?.occupation}</h5>
                      <Rating
                        name="size-small"
                        defaultValue={parseInt(review?.rating)}
                        size="small"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialStyled>
      )}
    </>
  );
}
const TestimonialStyled = styled.div`
  margin-top: -40px;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 688px) {
    min-height: 40vh;
    padding: 200px 10px;
  }
  .mySwiper {
    .card {
      border: 1px solid lightgray;
      border-radius: 5px;
      height: 350px;
      width: 320px;
      margin-left: 50px;
      padding: 20px;
      @media (max-width: 688px) {
        margin-left: 0px;
        height: 100%;
        width: 100%;
      }
      .card_header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .card_info {
        height: 220px;
        font-size: 14px;
        letter-spacing: 0.2px;
        padding: 10px;
        text-align: justify;
        overflow-y: scroll;
      }

      .card_rating {
        margin-top: 10px;
      }
    }
  }
`;
