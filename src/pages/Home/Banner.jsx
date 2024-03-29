import bgImg1 from "../../../src/assets/Banner/banner-1.jpg";
import bgImg2 from "../../../src/assets/Banner/banner-2.jpg";
import bgImg3 from "../../../src/assets/Banner/banner-3.jpg";
import Button from "../../ui/Button";
const Banner = () => {
  return (
    <div className="relative bg-[#0E1618]">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item-wrapper">
          <div className="banner-img-overlay"></div>
          <img src={bgImg1} className="w-full" />
          {/* texts */}
          <div className="banner-texts">
            <div className="texts-container">
              <p className="banner-sub-heading">Bringing Class To Cuisine</p>
              <h1 className="banner-heading">
                Where every flavor tells a story
              </h1>
              <p className="banner-description">
                Craving some delicious pairs food? Maybe your are in the mood
                for a juicy steak? No matter what kind of meal you have in
                mind.The Brochette Restaurant is ready to prepare it for you
              </p>
              <div>
                <Button variant="primary">Discover Menu</Button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item-wrapper">
          <div className="banner-img-overlay"></div>
          <img src={bgImg2} className="w-full" />
          {/* texts */}
          <div className="banner-texts">
            <div className="texts-container">
              <p className="banner-sub-heading">Bringing Class To Cuisine</p>
              <h1 className="banner-heading">
                Where every flavor tells a story
              </h1>
              <p className="banner-description">
                Craving some delicious pairs food? Maybe your are in the mood
                for a juicy steak? No matter what kind of meal you have in
                mind.The Brochette Restaurant is ready to prepare it for you
              </p>
              <div>
                <Button variant="primary">Discover Menu</Button>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item-wrapper">
          <div className="banner-img-overlay"></div>
          <img src={bgImg3} className="w-full" />
          {/* texts */}
          <div className="banner-texts">
            <div className="texts-container">
              <p className="banner-sub-heading">Bringing Class To Cuisine</p>
              <h1 className="banner-heading">
                Where every flavor tells a story
              </h1>
              <p className="banner-description">
                Craving some delicious pairs food? Maybe your are in the mood
                for a juicy steak? No matter what kind of meal you have in
                mind.The Brochette Restaurant is ready to prepare it for you
              </p>
              <div>
                <Button variant="primary">Discover Menu</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider buttons */}
      <div className="slider-btn-container">
        <a href="#item1">
          <Button variant="xs">1</Button>
        </a>
        <a href="#item2">
          <Button variant="xs">2</Button>
        </a>
        <a href="#item3">
          <Button variant="xs">3</Button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
