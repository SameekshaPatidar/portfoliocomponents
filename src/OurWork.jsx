import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboardCheck, faProjectDiagram, faArrowRight, faUserAltSlash, faPeopleGroup, faTasks, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { faPadlet, faRProject, faUikit } from '@fortawesome/free-brands-svg-icons';

export default function OurWork() {
  return (
    <div className="bg-white py-24 px-6 lg:px-8">
      {/* First Div */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        "Customized Solutions to Meet Every Requirement"
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
          At Avrach IT Solution, we offer a variety of engagement models to ensure perfect alignment with your project.
        </p>
      </div>

      {/* Second Div */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faUsers} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Dedicated Development Team</h2>
          <p className="text-sm text-gray-600 mt-2">
            For long-term projects, ongoing development, or team expansion.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faClipboardCheck} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Scoping Your Requirements</h2>
          <p className="text-sm text-gray-600 mt-2">
            Expert guidance to define your project scope and create a clear plan.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Talent/Resource Gap Filling</h2>
          <p className="text-sm text-gray-600 mt-2">
            Quickly fill skill gaps with our qualified professionals.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faUikit} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Project-Based Delivery</h2>
          <p className="text-sm text-gray-600 mt-2">
          Deliver specific projects with defined deliverables and timelines.
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faTasks} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">RFI/RFP Responses</h2>
          <p className="text-sm text-gray-600 mt-2">
          Detailed, customized proposals for any formal request.
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col w-full md:w-[400px] border border-gray-400 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <FontAwesomeIcon icon={faBarsProgress} className="text-green-600 text-4xl mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">
          Existing Project Takeover</h2>
          <p className="text-sm text-gray-600 mt-2">
          Inject fresh expertise to ensure successful completion of ongoing projects.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="w-full text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">
          "Ready to achieve smooth collaboration and effortless results? Let's connect!"
          </h2>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500 flex items-center transition-all duration-300 ease-in-out">
            Start A Conversation
            <span className="ml-3">
              <FontAwesomeIcon icon={faArrowRight} size="xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}








