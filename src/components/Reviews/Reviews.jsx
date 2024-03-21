import React, { useEffect, useState, useRef } from "react";
import Container from "../../shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviewsData.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="py-52">
      <Container>
        <div className="reviews">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="text-white text-center text-lg sm:text-xl font-serif italic">
                  <h1 className="">{review.review}</h1>
                  <p>{review.stars}</p>
                  <p>{review.userName}</p>
                  <div className="flex justify-center pt-4">
                    <img
                      src={review.userImg}
                      alt=""
                      className="w-24 h-24 rounded-full ring-2"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
