import React, { useState } from "react";
import "./FrequentlyAsked.css";
import { faqs } from "../constants";

const FAQCard = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const toggleAccordion = () => {
    setActiveIndex((prevState) => (!prevState));
  };

  return (
    <div onClick={toggleAccordion} className="faq">
      <div className="faq__question">
        {faq.question}
        <button className="faq__button font-bold"><span className="text-3xl">{!activeIndex ? "+" : "-"}</span></button>
      </div>
      {activeIndex && (
        <div className={`faq__answer ${activeIndex ? 'block' : 'hidden'}`}>{faq.answer}</div>
      )}
    </div>
  );
};

const FrequentlyAsked = () => {
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
