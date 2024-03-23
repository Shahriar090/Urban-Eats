import bgImg from "../../../assets/Banner/bg-box_icon.jpg";

import chefIcon from "../../../assets/about-us/chef.png";
import foodIcon from "../../../assets/about-us/food.png";
import musicIcon from "../../../assets/about-us/music.png";
import winesIcon from "../../../assets/about-us/wines.png";

const OurServices = () => {
  return (
    <section className="section-wrapper">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="our-services-container ">
        {/* div-1 */}
        <div className="food space-y-4 text-center">
          <div className="icon-wrapper">
            <img src={foodIcon} alt="" />
          </div>
          <h2 className="service-heading">Food Is Always Fresh</h2>
          <p className="service-des">
            The food we choose is always fresh and carefully checked before
            processing
          </p>
        </div>
        {/* div-2 */}
        <div className="chef space-y-4 text-center">
          <div className="icon-wrapper">
            <img src={chefIcon} alt="" />
          </div>
          <h2 className="service-heading">Long Time Chef</h2>
          <p className="service-des">
            The best Chefs in the world always have their own secrets for their
            dishes
          </p>
        </div>
        {/* div-3 */}
        <div className="music space-y-4 text-center">
          {" "}
          <div className="icon-wrapper">
            <img src={musicIcon} alt="" />
          </div>
          <h2 className="service-heading">Luxury Space & Music</h2>
          <p className="service-des">
            What's better than enjoying delicious food and music at the same
            time
          </p>
        </div>
        {/* div-4 */}
        <div className="wines space-y-4 text-center">
          <div className="icon-wrapper">
            <img src={winesIcon} alt="" />
          </div>
          <h2 className="service-heading">Drinks & Wines</h2>
          <p className="service-des">
            The wines at the restaurant are all precious and of the best quality
            for you enjoy
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
