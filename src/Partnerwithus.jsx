











import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faUsersCog,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PartnerWithUs = () => {
  return (
    <div className="bg-gray-50 mx-6 px-4 py-8">
      {/* Heading */}
      <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        "Collaborate with Us for All Your Digital Solutions"
      </h1>

      {/* second div */}
      <div className="mt-8 flex flex-col items-center md:flex-row justify-center gap-5">
        {/* Project-Based Development */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-md w-full  gap-3 md:w-1/2 lg:w-[460px] lg:h-[360px]">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faFileInvoiceDollar} size='2xl'className="text-green-500" />
          </div>
          <h2 className="m-4 text-4xl font-bold text-center md:text-3xl">Project-Based Development</h2>
          <p className="m-2 text-center text-gray-600">
            Perfect for concise, goal-oriented projects. We promise high-quality solutions delivered
            on time and within budget.
          </p>
          <div className="flex justify-center mt-4">
            <button className="text-sm font-semibold text-orange-600 border border-orange-500 px-4 py-2 ">Learn More
            <span className="ml-3 group-hover:ml-4 transition-all duration-200">
              <FontAwesomeIcon icon={faArrowRight} size='xl'/>
            </span>
            </button>
          </div>
        </div>

        {/* Dedicated Development Teams */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-md w-full  gap-3 md:w-1/2 lg:w-[460px] lg:h-[360px]">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faUsersCog} size='2xl'className="text-green-500" />
          </div>
          <h2 className="m-4 text-4xl font-bold text-center md:text-3xl">Dedicated Development Teams</h2>
          <p className="m-2 text-center text-gray-600">
          Enjoy the benefits of a scalable, integrated team, providing continuous support and deep expertise tailored.
          </p>
          <div className="flex justify-center mt-4">
            <button className="text-sm font-semibold text-orange-600 border border-orange-500 px-4 py-2 ">Learn More
            <span className="ml-3 group-hover:ml-4 transition-all duration-200">
              <FontAwesomeIcon icon={faArrowRight} size='xl'/>
            </span>
            </button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default PartnerWithUs;


