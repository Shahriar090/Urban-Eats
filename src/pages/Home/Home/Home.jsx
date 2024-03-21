import React from "react";
import Banner from "../Banner";
import AboutRestaurant from "../../AboutRestaurant/AboutRestaurant";
import OurServices from "../OurServices/OurServices";
import EventDetails from "../EventDetails/EventDetails";
import Reviews from "../../../components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutRestaurant />
      <OurServices />
      <EventDetails />
      <Reviews />
    </div>
  );
};

export default Home;
