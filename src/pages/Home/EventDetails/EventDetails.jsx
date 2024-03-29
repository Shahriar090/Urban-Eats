import React from "react";
import Container from "../../../shared/Container";
import EventImages from "./EventImages";
import Button from "../../../ui/Button";

const EventDetails = () => {
  return (
    <>
      <Container>
        <div className="text-center space-y-5">
          <h3 className="event-details-sub-head">Private Event</h3>
          <h1 className="event-details-main-head">Perfect Place For Events</h1>
          <p className="event-details-des">
            Whether you're hosting a corporate event, cocktail party, luncheon,
            dinner, meeting, shower, wedding reception, bat/bar mitzvah or
            rehearsal dinner, we know we can offer you and your guests a truly
            memorable event.
          </p>
          <Button variant="outline"> Get Started For Your Event</Button>
        </div>
        {/* event details with images */}
      </Container>
      <EventImages />
    </>
  );
};

export default EventDetails;
