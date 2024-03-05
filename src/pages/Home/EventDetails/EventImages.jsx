import React from "react";
import meetingImg from "../../../assets/Event-Img/meeting.jpg";
import weddingImg from "../../../assets/Event-Img/wedding.jpg";
import privateRoomImg from "../../../assets/Event-Img/private-room.jpg";
import birthdayImg from "../../../assets/Event-Img/birthday.jpg";

const EventImages = () => {
  return (
    <div className="event-images-container">
      {/* item - 1 */}
      <div className="item-1 group relative overflow-hidden mx-auto">
        <div className="img ">
          <picture>
            <img src={meetingImg} alt="" />
          </picture>
          {/* over lay div */}
          <div className="overlay-div">
            <div className="event-img-text-container">
              <h1 className="event-head">Meeting</h1>
              <p className="text-[#DFE0E0]">
                We are extremely happy to provide refined cater- ing services
                for your special events! By choosing us, you get a guarantee
                that everything.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* item - 2 */}
      <div className="item-2 group relative overflow-hidden mx-auto">
        <div className="img ">
          <picture>
            <img src={weddingImg} alt="" />
          </picture>
          {/* over lay div */}
          <div className="overlay-div">
            <div className="event-img-text-container">
              <h1 className="event-head">Wedding</h1>
              <p className="text-[#DFE0E0]">
                We are extremely happy to provide refined cater- ing services
                for your special events! By choosing us, you get a guarantee
                that everything.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* item - 3 */}
      <div className="item-3 group relative overflow-hidden mx-auto">
        <div className="img">
          <picture>
            <img src={privateRoomImg} alt="" className="" />
          </picture>
          {/* over lay div */}
          <div className="overlay-div">
            <div className="event-img-text-container">
              <h1 className="event-head">Private Room</h1>
              <p className="text-[#DFE0E0]">
                We are extremely happy to provide refined cater- ing services
                for your special events! By choosing us, you get a guarantee
                that everything.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* item - 4 */}
      <div className="item-4 group relative overflow-hidden mx-auto">
        <div className="img ">
          <picture>
            <img src={birthdayImg} alt="" />
          </picture>
          {/* over lay div */}
          <div className="overlay-div">
            <div className="event-img-text-container">
              <h1 className="event-head">Birthday Party</h1>
              <p className="text-[#DFE0E0]">
                We are extremely happy to provide refined cater- ing services
                for your special events! By choosing us, you get a guarantee
                that everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventImages;
