import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    if (index < people.length - 1) {
      setIndex((index) => {
        let newIndex = index + 1;
        return newIndex;
      });
    } else {
      setIndex((index) => {
        return 0;
      });
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber !== index) {
      setIndex(randomNumber);
    } else {
      if (index === 0) {
        setIndex((index) => {
          return people.length - 1;
        });
      } else {
        setIndex((index) => {
          return index - 1;
        });
      }
    }
  };

  const prevPerson = () => {
    if (index === 0) {
      setIndex((index) => {
        return people.length - 1;
      });
    } else {
      setIndex((index) => {
        return index - 1;
      });
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2 className="author">{name}</h2>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
