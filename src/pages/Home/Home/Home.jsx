import React from "react";
import Banner from "../Banner";
import AboutRestaurant from "../../AboutRestaurant/AboutRestaurant";
import OurServices from "../OurServices/OurServices";
import EventDetails from "../EventDetails/EventDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutRestaurant />
      <OurServices />
      <EventDetails />
    </div>
  );
};

export default Home;
