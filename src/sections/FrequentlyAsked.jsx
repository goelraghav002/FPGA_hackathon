import React, { useState } from 'react';
import './FrequentlyAsked.css';

const FrequentlyAsked = () => {
  const faqs = [
    {
      question: 'Ques 1',
      answer: 'Ans 1',
    },
    {
      question: 'Ques 2',
      answer: 'Ans 2',
    },
    {
        question: 'Ques 3',
        answer: 'Ans 2',
    },
    {
        question: 'Ques 4',
        answer: 'Ans 2',
    },
    {
        question: 'Ques 5',
        answer: 'Ans 2',
      },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container-faq">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <div
              className={`faq__question ${
                activeIndex === index ? 'active' : ''
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <button
                className={`faq__button ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            {activeIndex === index && (
              <div className="faq__answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
