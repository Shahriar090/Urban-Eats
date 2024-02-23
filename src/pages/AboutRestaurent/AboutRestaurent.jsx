import aboutImg from "../../../src/assets/Banner/about-1.jpg";

const AboutRestaurent = () => {
  return (
    <div className="about-section-container bg-[#0E1618] flex justify-center pt-6 md:pt-10 lg:pt-16 px-4 lg:px-0">
      <div className="about-restaurant flex flex-col lg:flex-row items-center  gap-8">
        <div className="texts w-full lg:w-3/6 text-white space-y-4 ">
          <h3 className="text-2xl lg:text-3xl font-serif">About Restaurant</h3>
          <h1 className="text-3xl lg:text-5xl font-serif font-semibold tracking-wider">
            5 Star restaurant in chattogram
          </h1>

          <p className="font-serif text-[#C3A981] text-xl max-w-[60ch]">
            We see our customers as invited guests to a party, and we are the
            hosts. It’s our job every day to make every important aspect.
          </p>
          <p className="font-sans text-lg max-w-[70ch]">
            It’s the story of two French entrepreneurs, Rémi Laba and Aymeric
            Clemente, who met in New York City in the early 2000’s and decided
            to join forces to open the first Bagatelle in the City. Drawing on
            their respective experiences in the hospitality industry, the duo
            imagined a place celebrating the South of France’s festive spirit.
          </p>
          <div>
            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 text-[#DFE0E0] bg-[#C3A981] hover:bg-[#DFE0E0] hover:text-[#C3A981] transition-all duration-500">
              More About Us
            </button>
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
