import React, { useEffect, useState, useRef } from "react";
import Container from "../../shared/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// custom css for change the slider buttons color
import "./style/custom.css";

import { Navigation } from "swiper/modules";
import Star from "./Star";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("reviewsData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews data");
        }
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-4xl text-white text-center">Loading...</h1>
      </div>
    );
  }
  return (
    <Container>
      <section className="mb-20">
        <h1 className="rev-head">Testimonials</h1>
        <p className="rev-sub-head">Customer Reviews</p>
      </section>
      <section className="rev-container">
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="rev-img-container">
                  <img src={review.userImg} alt="" className="rev-user-img" />
                </div>
                <div className="rev-text-container">
                  <div className="space-y-4">
                    <h1 className="quote-icon">
                      <FaQuoteLeft className="quote-icon-style" />
                    </h1>
                    <p className="review-texts">{review.review}</p>
                    <h1 className="quote-icon">
                      <FaQuoteRight className="quote-icon-style" />
                    </h1>
                  </div>
                  <Star stars={review.stars} />
                  <p className="text-[#C3A981] ">- - {review.userName} - -</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Container>
  );
};

export default Reviews;
