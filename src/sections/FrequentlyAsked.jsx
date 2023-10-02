import React, { useState } from 'react';
import './FrequentlyAsked.css';

const FrequentlyAsked = () => {
  const faqs = [
    {
      question: 'How do I participate?',
      answer: 'Look for FPGA hackathons that are currently accepting participants.Once you find a hackathon that interests you, register for the event through the provided registration process.Ensure you have access to the necessary FPGA hardware and development tools',
    },
    {
      question: 'What is the criteria for judging?',
      answer: 'Judges often look for innovative and creative solutions to the given challenge or problem.The technical quality of your project is crucial. This includes the functionality, reliability, and efficiency of your solution.',
    },
    {
        question: 'What is the team size?',
        answer: 'The team should consist of 4-5 people.',
    },
    {
        question: "I don't have a team, how can I participate?",
        answer: "No issues, if someone doesn't have a team they can still participate, the organisers will find you some random team.",
    },
    {
        question: 'Where to sign up?',
        answer: 'You can register through our events’ website. Keep in mind of the respective deadlines. Remember to sign up separately.',
      },
      {
        question: 'What is FPGA?',
        answer: 'FPGA is Field Programmable Gate Array. It is a development board, generally used for VLSI verification of IC. These development boards are now also used in embedded systems due to their low power consumption, high speed data processing and various other key features.',
      },
      {
        question: 'I don’t know about FPGA in great detail. Can I still participate?',
        answer: 'Before the hackathon, there will also be a 4-day workshop, teaching the same.',
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
