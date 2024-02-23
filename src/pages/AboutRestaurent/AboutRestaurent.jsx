import aboutImg from "../../../src/assets/Banner/about-1.jpg";

const AboutRestaurent = () => {
  return (
    <div className="about-res-container">
      <div className="about-res-layout-wrapper">
        <div className="about-res-texts-wrapper">
          <h3 className="about-res-heading-1">About Restaurant</h3>
          <h1 className="about-res-heading-2">
            5 Star restaurant in chattogram
          </h1>

          <p className="about-res-des-1">
            We see our customers as invited guests to a party, and we are the
            hosts. It’s our job every day to make every important aspect.
          </p>
          <p className="about-res-des-2">
            It’s the story of two French entrepreneurs, Rémi Laba and Aymeric
            Clemente, who met in New York City in the early 2000’s and decided
            to join forces to open the first Bagatelle in the City. Drawing on
            their respective experiences in the hospitality industry, the duo
            imagined a place celebrating the South of France’s festive spirit.
          </p>
          <div>
            <button className="about-res-btn">More About Us</button>
          </div>
        </div>
        <div className="w-full lg:w-3/6">
          <picture>
            <img src={aboutImg} alt="" className="w-full lg:w-3/5 lg:mx-auto" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default AboutRestaurent;
