import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faShoppingCart,
  faPalette,
  faClipboardCheck,
  faDesktop,
  faMobileAlt,
  faUsers,
  faArrowRight,
 faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const ConsultingSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const cards = [
    {
      title: "AI/ML/GenAI",
      icon: faLayerGroup,
      description: "Gain a competitive edge with AI-powered insights and automation.",
    },
    {
      title: "Cloud Engineering",
      icon: faCloud,
      description: "Build scalable and secure cloud solutions.",
    },
    {
      title: "Software Development",
      icon: faCode,
      description: "Innovative software solutions to transform your business.",

    },
    {
      title: "E-commerce",
      icon: faShoppingCart,
      description: "Grow your online business with cutting-edge e-commerce solutions.",
    },
    {
      title: "UI/UX",
      icon: faPalette,
      description: "Design experiences that resonate with users.",

    },
    {
      title: "QA",
      icon: faClipboardCheck,
      description: "Ensure quality with rigorous testing and automation.",

    },
    {
      title: "Web Development",
      icon: faDesktop,
      description: "Build responsive and high-performance websites.",
    },
    {
      title: "Mobile App Development",
      icon: faMobileAlt,
      description: "Develop user-friendly and robust mobile applications.",

    },
    {
      title: "Dedicated Teams",
      icon: faUsers,
      description: "Get access to dedicated development teams for your projects.",
    
    },
  ];

  return (
      <div className="'bg-white py-24 px-6 sm:px-10 lg:px-24'">
        {/* First Div: Heading and Paragraph */}
        <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-gray-900 sm:text-3xl md:text-5xl'>
                    Software Development and Consulting
                </h1>
                <p className="mt-3 text-gray-800 font-semibold max-w-xl mx-auto sm:text-xl">
                    As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:
                </p>
            </div>

        {/* Second Div: Cards Section */}
        <div className="grid grid-rows-4 lg:grid-cols-3 gap-2 md:gap-4 w-1/1 ">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`card flex flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition-all duration-300 ${
                expandedCard === index ? "h-auto" : "h-32"
              } cursor-pointer`}
            >
              <FontAwesomeIcon icon={card.icon} size="2xl" />
              <h3 className="text-sm font-semibold">{card.title}</h3>
              {expandedCard === index && (
                <div className="mt-4 text-center ">
                  <p className="text-gray-600 mb-2">{card.description}</p>
                  <div className="flex items-center justify-center text-blue-500 cursor-pointer">
                    <span>Explore Now</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default ConsultingSection;
