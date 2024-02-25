import timeImg from "../../../src/assets/Banner/open_hours.jpg";

const TimeDetails = () => {
  return (
    <div className="time-details-container">
      <div className="time-img  mx-auto ">
        <picture>
          <img src={timeImg} alt="" className="" />
        </picture>
      </div>
      <div className="time-texts">
        <h1 className="time-texts-heading">Open Time Hours</h1>
        <p className="time-texts-des">
          Come and experience the classy atmosphere with delicious food and
          music at brochette
        </p>
        <div className="schedule-container">
          <h2 className="schedule-heading">Opening Hours:</h2>
          <p>Monday - Friday : 9.00am - 22.00pm</p>
          <p>Saturday: 10.00am - 23.00pm</p>
          <p>Sunday: 5.00pm - 23.00pm</p>
          <p>Holidays: Closed</p>
          <p>Happy Hour: 18.00pm - 20.00pm</p>
        </div>
      </div>
    </div>
  );
};

export default TimeDetails;
