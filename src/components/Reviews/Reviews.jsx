import React, { useEffect, useState, useRef } from "react";
import Container from "../../shared/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// custom css for change the slider buttons color
import "./swiper.css";

import { Navigation } from "swiper/modules";
import Star from "./Star";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviewsData.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <Container>
      <section className="my-20">
        <h1 className="text-3xl text-[#DFE0E0] text-center font-sans">
          Testimonials
        </h1>
        <p className="text-lg text-[#C3A981] font-serif text-center italic">
          Customer Reviews
        </p>
      </section>
      <section className="shadow-sm shadow-[#C3A981] p-5 sm:p-8">
        <div className="reviews">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-container">
                  <div className="flex justify-center mb-10">
                    <img
                      src={review.userImg}
                      alt=""
                      className="w-20 h-20 rounded-full ring-2 ring-[#C3A981]"
                    />
                  </div>
                  <div className=" text-center text-lg sm:text-xl font-serif italic space-y-2">
                    <div className="space-y-4">
                      <h1 className="flex justify-center">
                        <FaQuoteLeft className="text-4xl text-[#C3A981] " />
                      </h1>
                      <p className="max-w-[30ch] sm:max-w-[50ch] mx-auto text-[#DFE0E0]">
                        {review.review}
                      </p>
                      <h1 className="flex justify-center">
                        <FaQuoteRight className="text-4xl text-[#C3A981] " />
                      </h1>
                    </div>
                    <Star stars={review.stars} />
                    <p className="text-[#C3A981] ">- - {review.userName} - -</p>
                  </div>
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
