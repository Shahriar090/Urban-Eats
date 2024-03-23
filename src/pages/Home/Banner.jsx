import bgImg1 from "../../../src/assets/Banner/banner-1.jpg";
import bgImg2 from "../../../src/assets/Banner/banner-2.jpg";
import bgImg3 from "../../../src/assets/Banner/banner-3.jpg";
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
                <button className="banner-btn">Discover Menu</button>
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
                <button className="banner-btn">Discover Menu</button>
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
                <button className="banner-btn">Discover Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider buttons */}
      <div className="slider-btn-container">
        <a href="#item1" className="slider-btn">
          1
        </a>
        <a href="#item2" className="slider-btn">
          2
        </a>
        <a href="#item3" className="slider-btn">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
