import React, { useState } from "react";
import "./FrequentlyAsked.css";
import { faqs } from "../constants";

const FAQCard = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const toggleAccordion = () => {
    setActiveIndex((prevState) => (!prevState));
  };

  return (
    <div className="container-faq" id="faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <FAQCard key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
