import { ieee, jiit, amd, aujus } from "../assets/organizers";
import { rohith, vaibbhav } from "../assets/speakers";

export const prizes = [
  {
    icon: '<i class="first fa-solid fa-trophy fa-4x"></i>',
    type: 'Winner',
    content:
      'Winner prize will be given to a project that outstands all other submissions'
  },
  {
    icon: '<i class="second fa-solid fa-medal fa-4x"></i>',
    type: '1st Runner-up',
    content:
      '1st Runner-up prize will be given to the second best project of the hackathon'
  },
];

export const organizers = [
  {
    name: "ECE Department JIIT",
    img: jiit,
  },
  {
    name: "IEEE SB JIIT",
    img: ieee,
  },
  {
    name: "AMD",
    img: amd,
  },
  {
    name: "Aujus Technology",
    img: aujus,
  },
];

export const speakers = [
  {
    name: "Rohith Gopala Krishna",
    designation: "Country Head - AMD",
    img: rohith,
  },
  {
    name: "Vaibbhav Mishrra",
    designation: "Director & Co-Founder - AUJUS Technologies",
    img: vaibbhav,
  },
];

export const timeline = [
  {
    date: "3rd October 2023",
    event: "Orientiation",
  },
  {
    date: "4th - 7th October 2023",
    event: "Offline Training",
  },
  {
    date: "10th October 2023",
    event: "Team Registration",
  },
  {
    date: "12th - 25th October 2023",
    event: "Idea Implementation",
  },
  {
    date: "28th October 2023",
    event: "Idea Presentation",
  },
];

export const faqs = [
  {
    question: "How do I participate?",
    answer:
      "Look for FPGA hackathons that are currently accepting participants.Once you find a hackathon that interests you, register for the event through the provided registration process.Ensure you have access to the necessary FPGA hardware and development tools",
  },
  {
    question: "What is the criteria for judging?",
    answer:
      "Judges often look for innovative and creative solutions to the given challenge or problem.The technical quality of your project is crucial. This includes the functionality, reliability, and efficiency of your solution.",
  },
  {
    question: "What is the team size?",
    answer: "The team should consist of 4-5 people.",
  },
  {
    question: "I don't have a team, how can I participate?",
    answer:
      "No issues, if someone doesn't have a team they can still participate, the organisers will find you some random team.",
  },
  {
    question: "Where to sign up?",
    answer:
      "You can register through our events’ website. Keep in mind of the respective deadlines. Remember to sign up separately.",
  },
  {
    question: "What is FPGA?",
    answer:
      "FPGA is Field Programmable Gate Array. It is a development board, generally used for VLSI verification of IC. These development boards are now also used in embedded systems due to their low power consumption, high speed data processing and various other key features.",
  },
  {
    question:
      "I don’t know about FPGA in great detail. Can I still participate?",
    answer:
      "Before the hackathon, there will also be a 4-day workshop, teaching the same.",
  },
];
