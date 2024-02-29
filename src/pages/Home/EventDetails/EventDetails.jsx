import React from "react";
import Container from "../../../shared/Container";
import EventImages from "./EventImages";

const EventDetails = () => {
  return (
    <Container>
      <div className="text-center space-y-5">
        <h3 className="text-[#C3A981] italic text-lg">Private Event</h3>
        <h1 className="text-[#DFE0E0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide">
          Perfect Place For Events
        </h1>
        <p className="text-[#DFE0E0] max-w-[60ch] mx-auto">
          Whether you're hosting a corporate event, cocktail party, luncheon,
          dinner, meeting, shower, wedding reception, bat/bar mitzvah or
          rehearsal dinner, we know we can offer you and your guests a truly
          memorable event.
        </p>
        <button className="px-4 py-2  md:px-6 md:py-3 lg:px-6 lg:py-3 text-[#DFE0E0] bg-[#C3A981] hover:bg-[#DFE0E0] hover:text-[#C3A981] transition-all duration-500 ">
          Get Started For Your Event
        </button>
      </div>
      {/* event details with images */}
      <EventImages />
    </Container>
  );
};

export default EventDetails;
