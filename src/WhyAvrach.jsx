import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faShieldAlt, faHandshake, faGlobe,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WhyAvrach = () => {
  return (
    <div className="bg-blue-600 text-white p-8">
      {/* First div */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Why Avrach?
        </h1>
        <p className="text-xs md:text-base lg:text-xl m-4  font-sans">
        "We recognize your requirements and match you with the ideal talent. From the initial conversation to seamlessly integrating our team into your projects, we support you every step of the way."
        </p>
      </div>

      {/* Second div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-lg text-center">
          <FontAwesomeIcon icon={faLightbulb} className="text-4xl mb-4 text-blue-600" />
          <h3 className="font-semibold text-xl">Innovation at the Core</h3>
          <p className="mt-2">
            We invest in the future, staying ahead with cutting-edge technology and trends.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-lg text-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-4xl mb-4 text-blue-600" />
          <h3 className="font-semibold text-xl">Unmatched Security and Compliance</h3>
          <p className="mt-2">
            With ISO certifications, we guarantee the security and integrity of your data.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-lg text-center">
          <FontAwesomeIcon icon={faHandshake} className="text-4xl mb-4 text-blue-600" />
          <h3 className="font-semibold text-xl">Client-Centric Partnership</h3>
          <p className="mt-2">
            We believe in building lasting relationships based on trust, transparency, and mutual success.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-black p-6 rounded-lg text-center">
          <FontAwesomeIcon icon={faGlobe} className="text-4xl mb-4 text-blue-600" />
          <h3 className="font-semibold text-xl">Global Recognition</h3>
          <p className="mt-2">
            Our accolades speak to our commitment to excellence, innovation, and growth in the digital domain.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 hover:bg-white flex items-center transition-all duration-300 ease-in-out">
            Learn What sets us Apart
            <span className="ml-3 group-hover:ml-4 transition-all duration-200">
              <FontAwesomeIcon icon={faArrowRight} size='xl'/>
            </span>
          </button>
        </div>
    </div>
  );
};

export default WhyAvrach;




// import React from 'react'

// function WhyAvrach() {
//     return (
//         <div className='bg-blue-600 py-24 px-12 sm:px-6 lg:px-8 '>
//             {/* firstdiv */}
//             <div className='text-center'>
//                 <h1 className='text-8xl font-bold text-white sm:text-3xl md:text-4xl'>Why Avrach IT Solution ?</h1>
//                 <p className='mt-3 text-white max-w-2xl mx-auto  sm:text-xl'>We understand your needs and connect you with the perfect talent. From the first
//                     call to integrating our staff into your projects, we're with you every step.</p>
//             </div>
//             {/* seconddiv */}
//              <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6'>

//              </div>
//         </div>
//     )
// }

// export default WhyAvrach