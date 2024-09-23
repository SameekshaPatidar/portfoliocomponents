{/* <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-black hover:bg-white border border-orange-600 flex items-center justify-center space-x-2 flex-nowrap whitespace-nowrap md:px-6 md:py-3 md:text-lg">
  <span>Share Your Requirements</span>
  <FontAwesomeIcon icon={faArrowRight} size="xl" />
</button> */}








import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCog, faFileInvoiceDollar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Infocards() {
  return (
    <div className="bg-blue-950 px-4 py-8 lg:px-20 lg:py-12">
      {/* First div */}
      <div className="text-center mb-12">
        <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4">Flexible Engagement Models to Suit Your Needs</h1>
        <p className="text-green-400 text-lg lg:text-xl">
          Find the Perfect Solution for Your Project, Whether You Need a Fully Managed Team, Staff Augmentation, or a Fixed-Price Approach.
        </p>
      </div>

      {/* Second div */}
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
          <FontAwesomeIcon icon={faUsers} size="3x" className="text-blue-900 mb-4" />
          <h2 className="text-xl font-bold mb-2">Managed Team</h2>
          <p className="text-gray-600 mb-4">Your product, our dedicated team. From concept to completion, we handle it all.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-500 hover:bg-white border border-orange-600 flex items-center justify-center space-x-2 md:px-6 md:py-3 md:text-lg  ">
            <span>Contact Us For Details</span>
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
          <FontAwesomeIcon icon={faUserCog} size="3x" className="text-blue-900 mb-4" />
          <h2 className="text-xl font-bold mb-2">Staff Augmentation</h2>
          <p className="text-gray-600 mb-4">Need extra hands? Our experts seamlessly join your team, providing the skills you need.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-500 hover:bg-white border border-orange-600 flex items-center justify-center space-x-2 md:px-6 md:py-3 md:text-lg">
            <span>Contact Us For Details</span>
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col">
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="3x" className="text-blue-900 mb-4" />
          <h2 className="text-xl font-bold mb-2">Fixed Cost</h2>
          <p className="text-gray-600 mb-4">Upfront price, guaranteed delivery. Your project completed on time and within budget.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:text-orange-500 hover:bg-white border border-orange-600 flex items-center justify-center space-x-2 md:px-6 md:py-3 md:text-lg">
            <span>Share Your Requirements</span>
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Infocards;








