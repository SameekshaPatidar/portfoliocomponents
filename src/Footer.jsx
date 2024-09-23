import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white  font-sans p-8 sm:p-16">
      <div className="flex flex-col items-center my-4 md:flex-row md:justify-center md:gap-16 lg:gap-48">
        <div className="mb-8 md:mb-0">
          <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Company</h6>
          <ul className="text-center md:text-left">
            <li>About Us</li>
            <li>Careers</li>
            <li>Referral Program</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Services</h6>
          <ul className="text-center md:text-left">
            <li>Technologies</li>
            <li>Engagement Models</li>
            <li>How We Work</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Insights</h6>
          <ul className="text-center md:text-left">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Policies</h6>
          <ul className="text-center md:text-left">
            <li>T&C</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      
      <hr className='w-full h-0.5 bg-blue-500 mt-8 mb-4' />
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
        <div className="text-gray-100 text-sm text-center md:text-left">
          Copyright © 2023 - 2024 Avrach IT Solution Private Limited. All Rights Reserved.
        </div>
        {/* icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          <FontAwesomeIcon icon={faYoutube} size="lg" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;











// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-950 text-white text-base font-sans p-8 sm:p-16">
//       <div className="flex flex-col items-center my-4 md:flex-row md:justify-center md:gap-16 lg:gap-48">
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Company</h6>
//           <ul className="text-center md:text-left">
//             <li>About Us</li>
//             <li>Careers</li>
//             <li>Referral Program</li>
//           </ul>
//         </div>
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Services</h6>
//           <ul className="text-center md:text-left">
//             <li>Technologies</li>
//             <li>Engagement Models</li>
//             <li>How We Work</li>
//           </ul>
//         </div>
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Insights</h6>
//           <ul className="text-center md:text-left">
//             <li>Blog</li>
//             <li>Case Studies</li>
//             <li>Sitemap</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Policies</h6>
//           <ul className="text-center md:text-left">
//             <li>T&C</li>
//             <li>Privacy Policy</li>
//             <li>Cookie Policy</li>
//           </ul>
//         </div>
//       </div>
      
//       <hr className='w-full h-0.5 bg-blue-500 mt-8 mb-4' />
      

//       <div className="flex justify-between items-center mt-8 ">
//         <div className="text-gray-100 text-sm">
//           Copyright © 2023 - 2024 Avrach IT Solution Private Limited. All Rights Reserved.
//         </div>
//       {/* icons */}
//         <div className="flex space-x-6 ">
//           <FontAwesomeIcon icon={faFacebookF} size="lg" />
//           <FontAwesomeIcon icon={faTwitter} size="lg" />
//           <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//           <FontAwesomeIcon icon={faYoutube} size="lg" />
//           <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-950 text-white text-base font-sans p-8 sm:p-16 ">
//       <div className="flex flex-col items-center my-4 md:flex-row md:justify-center md:gap-16 lg:gap-48">
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Company</h6>
//           <ul className="text-center md:text-left">
//             <li>About Us</li>
//             <li>Careers</li>
//             <li>Referral Program</li>
//           </ul>
//         </div>
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Services</h6>
//           <ul className="text-center md:text-left">
//             <li>Technologies</li>
//             <li>Engagement Models</li>
//             <li>How We Work</li>
//           </ul>
//         </div>
//         <div className="mb-8 md:mb-0">
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Insights</h6>
//           <ul className="text-center md:text-left">
//             <li>Blog</li>
//             <li>Case Studies</li>
//             <li>Sitemap</li>
//           </ul>
//         </div>
//         <div>
//           <h6 className="font-bold text-xl md:text-2xl mb-2 text-center md:text-left">Policies</h6>
//           <ul className="text-center md:text-left">
//             <li>T&C</li>
//             <li>Privacy Policy</li>
//             <li>Cookie Policy</li>
//           </ul>
//         </div>
//       </div>
//       <hr  className='bg-blue-600 '/>
//       <div className="flex justify-center space-x-4 mt-8">
//         <FontAwesomeIcon icon={faFacebookF} size="lg" />
//         <FontAwesomeIcon icon={faTwitter} size="lg" />
//         <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
//         <FontAwesomeIcon icon={faYoutube} size="lg" />
//         <FontAwesomeIcon icon={faInstagram} size="lg" />
//       </div>
//       <div className="text-center text-gray-100 mt-5 text-sm">
//         Copyright © 2023 - 2024 Avrach IT Solution Private Limited. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


