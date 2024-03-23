import aboutImg from "../../../src/assets/Banner/about-1.jpg";
import Container from "../../shared/Container";

const Details = () => {
  return (
    <Container>
      <div className="details-parent">
        <div className="details-texts-container">
          <h2 className="details-sub-head ">About Restaurant</h2>
          <h1 className="details-main-head ">
            5 Star Luxury Restaurant In Paris
          </h1>
          <p className="details-description-1">
            We see our customers as invited guests to a party, and we are the
            hosts. It’s our job every day to make every important aspect.
          </p>
          <p className="details-description-2">
            It’s the story of two French entrepreneurs, Rémi Laba and Aymeric
            Clemente, who met in New York City in the early 2000’s and decided
            to join forces to open the first Bagatelle in the City. Drawing on
            their respective experiences in the hospitality industry, the duo
            imagined a place celebrating the South of France’s festive spirit.
          </p>
          <button className="details-btn">More About Us</button>
        </div>
        <div className="about-img w-full lg:w-2/5">
          <picture>
            <img src={aboutImg} alt="" className="w-full" />
          </picture>
        </div>
      </div>
    </Container>
  );
};

export default Details;
