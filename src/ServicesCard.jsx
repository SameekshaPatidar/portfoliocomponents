import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVrCardboard, faCloud, faMicrochip, faArrowRight } from '@fortawesome/free-solid-svg-icons';  // Imported faArrowRight

const ServicesCard = () => {
  return (
    <section className="py-10 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 ">
          "Expert Web Development Solutions Utilizing Cutting-Edge Technologies"</h1>
          <p className="text-gray-600">
          "Our web development services integrate cutting-edge technologies such as Augmented Reality (AR), Virtual Reality (VR), Internet of Things (IoT), and Cloud Computing. Our team builds innovative, high-performance websites and applications designed to deliver exceptional user experiences and drive your business growth."
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 - AR */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-5/12 lg:w-5/12 flex flex-col items-center text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faUser} size="3x" className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Augmented Reality (AR)</h2>
            <p className="text-gray-600">
              Our web developers use AR to let users see and interact with virtual items right where they are, making shopping and learning more interactive.
            </p>
          </div>

          {/* Card 2 - VR */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-5/12 lg:w-5/12 flex flex-col items-center text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faVrCardboard} size="3x" className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Virtual Reality (VR)</h2>
            <p className="text-gray-600">
              We integrate VR into websites to allow users to explore 3D spaces, perfect for virtual tours and online training.
            </p>
          </div>

          {/* Card 3 - IoT */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-5/12 lg:w-5/12 flex flex-col items-center text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faMicrochip} size="3x" className="text-green-600" />  {/* Updated icon */}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Internet of Things (IoT)</h2>
            <p className="text-gray-600">
              Our team implements IoT solutions to connect devices and gather real-time data for improved efficiency and decision-making.
            </p>
          </div>

          {/* Card 4 - Cloud Computing */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-5/12 lg:w-5/12 flex flex-col items-center text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faCloud} size="3x" className="text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Cloud Computing</h2>
            <p className="text-gray-600">
              We leverage cloud technologies to build scalable and cost-effective solutions that adapt to your business needs.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 flex items-center transition-all duration-300 ease-in-out">
            Talk To Our Team
            <span className="ml-3 group-hover:ml-4 transition-all duration-200">
              <FontAwesomeIcon icon={faArrowRight} size='xl'/>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;

