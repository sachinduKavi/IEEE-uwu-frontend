import React from "react";
import PropTypes from "prop-types";
import "../css/eventCard.css";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const EventCard = (props) => {
  const { title, description, date, time,venue, imageUrl } = props;
  return (
    <div>
      <div className="event-card">
        {imageUrl && <img src={imageUrl} alt={title} className="event-image" />}
        <div className="event-time-date">
          <div className="event-date-container">
            <HiMiniCalendarDateRange className="event-icon" />
            <p className="event-date">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <p className="event-time-data-seperator"> |</p>
          <div className="event-time-container">
            <MdOutlineAccessTimeFilled className="event-icon" />
            <p className="event-time">{time}</p>
          </div>
        </div>
        <div className="event-venue">
            <IoLocation className="event-icon" />
            <p>{venue}</p>
        </div>
        <h2 className="event-title">{title}</h2>
        <p className="event-description">{description}</p>
        <div className="event-button-container">
          <p>Join Event</p>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default EventCard;
