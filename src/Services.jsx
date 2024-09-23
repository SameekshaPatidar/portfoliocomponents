import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Services = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    // Function to toggle card expansion
    const toggleCard = (cardIndex) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };

    const cards = [
        { title: 'AI/ML/GenAI', description: 'Gain a competitive edge with AI-powered insights and automation.' },
        { title: 'Cloud Engineering', description: 'Build scalable and secure cloud solutions.' },
        { title: 'Software Development', description: 'Innovative software solutions to transform your business.' },
        { title: 'E-commerce', description: 'Grow your online business with cutting-edge e-commerce solutions.' },
        { title: 'UI/UX', description: 'Design experiences that resonate with users.' },
        { title: 'QA', description: 'Ensure quality with rigorous testing and automation.' },
        { title: 'Web Development', description: 'Build responsive and high-performance websites.' },
        { title: 'Mobile App Development', description: 'Develop user-friendly and robust mobile applications.' },
        { title: 'Dedicated Teams', description: 'Get access to dedicated development teams for your projects.' },
    ];

    return (
        <div className='bg-white py-24 px-6 sm:px-10 lg:px-24'>
            {/* Header section */}
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-gray-900 sm:text-3xl md:text-5xl'>
                    Software Development and Consulting
                </h1>
                <p className="mt-3 text-gray-800 font-semibold max-w-xl mx-auto sm:text-xl">
                    As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:
                </p>
            </div>
            {/* Cards section */}
            <div className='flex flex-wrap justify-center gap-6'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-between p-6 bg-gray-50 rounded-lg shadow-md w-full sm:w-[40%] lg:w-[30%] transition-all duration-300 ${
                            expandedCard === index ? 'h-auto' : 'h-[100px]'
                        }`}
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <FontAwesomeIcon icon={faLayerGroup} size='2xl' />
                                <h2 className='text-lg font-semibold text-gray-900'>{card.title}</h2>
                            </div>
                            <FontAwesomeIcon
                                icon={expandedCard === index ? faMinus : faPlus}
                                onClick={() => toggleCard(index)}
                                className="cursor-pointer"
                            />
                        </div>
                        {expandedCard === index && (
                            <div className="mt-4">
                                <p className="text-gray-700">{card.description}</p>
                                <div className='mt-4 flex items-center gap-2 text-blue-600 cursor-pointer'>
                                    <span>Explore Now</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;







// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus, faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// const Services = () => {
//     const [expandedCard, setExpandedCard] = useState(null);

//     // Function to toggle card expansion
//     const toggleCard = (cardIndex) => {
//         setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
//     };

//     const cards = [
//         { title: 'AI/ML/GenAI', description: 'Gain a competitive edge with AI-powered insights and automation.' },
//         { title: 'Cloud Engineering', description: 'Build scalable and secure cloud solutions.' },
//         { title: 'Software Development', description: 'Innovative software solutions to transform your business.' },
//         { title: 'E-commerce', description: 'Grow your online business with cutting-edge e-commerce solutions.' },
//         { title: 'UI/UX', description: 'Design experiences that resonate with users.' },
//         { title: 'QA', description: 'Ensure quality with rigorous testing and automation.' },
//         { title: 'Web Development', description: 'Build responsive and high-performance websites.' },
//         { title: 'Mobile App Development', description: 'Develop user-friendly and robust mobile applications.' },
//         { title: 'Dedicated Teams', description: 'Get access to dedicated development teams for your projects.' },
//     ];

//     return (
//         <div className='bg-white py-24 px-6 sm:px-10 lg:px-24'>
//             {/* Header section */}
//             <div className='text-center mb-10'>
//                 <h1 className='text-4xl font-bold text-gray-900 sm:text-3xl md:text-5xl'>
//                     Software Development and Consulting
//                 </h1>
//                 <p className="mt-3 text-gray-800 font-semibold max-w-xl mx-auto sm:text-xl">
//                     As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:
//                 </p>
//             </div>
//             {/* Cards section */}
//             <div className='grid grid-flow-row gap-6 sm:grid-cols-2 lg:grid-cols-3'>
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col justify-between p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ${
//                             expandedCard === index ? 'h-auto' : 'h-[100px]'
//                         }`}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex items-center gap-4'>
//                                 <FontAwesomeIcon icon={faLayerGroup} size='2xl' />
//                                 <h2 className='text-lg font-semibold text-gray-900'>{card.title}</h2>
//                             </div>
//                             <FontAwesomeIcon
//                                 icon={expandedCard === index ? faMinus : faPlus}
//                                 onClick={() => toggleCard(index)}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                         {expandedCard === index && (
//                             <div className="mt-4">
//                                 <p className="text-gray-700">{card.description}</p>
//                                 <div className='mt-4 flex items-center gap-2 text-blue-600 cursor-pointer'>
//                                     <span>Explore Now</span>
//                                     <FontAwesomeIcon icon={faArrowRight} />
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;










// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus, faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

// const Services = () => {
//     const [expandedCard, setExpandedCard] = useState(null);

//     // Function to toggle card expansion
//     const toggleCard = (cardIndex) => {
//         setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
//     };

//     const cards = [
//         { title: 'AI/ML/GenAI', description: 'Gain a competitive edge with AI-powered insights and automation.' },
//         { title: 'Cloud Engineering', description: 'Build scalable and secure cloud solutions.' },
//         { title: 'Software Development', description: 'Innovative software solutions to transform your business.' },
//         { title: 'E-commerce', description: 'Grow your online business with cutting-edge e-commerce solutions.' },
//         { title: 'UI/UX', description: 'Design experiences that resonate with users.' },
//         { title: 'QA', description: 'Ensure quality with rigorous testing and automation.' },
//         { title: 'Web Development', description: 'Build responsive and high-performance websites.' },
//         { title: 'Mobile App Development', description: 'Develop user-friendly and robust mobile applications.' },
//         { title: 'Dedicated Teams', description: 'Get access to dedicated development teams for your projects.' },
//     ];

//     return (
//         <div className='bg-white py-24 px-6 sm:px-10 lg:px-24'>
//             {/* Header section */}
//             <div className='text-center mb-10'>
//                 <h1 className='text-4xl font-bold text-gray-900 sm:text-3xl md:text-5xl'>
//                     Software Development and Consulting
//                 </h1>
//                 <p className="mt-3 text-gray-800 font-semibold max-w-xl mx-auto sm:text-xl">
//                     As a reliable software development company, we help startups and enterprises realize their business goals with our advanced software solutions. Our portfolio of custom software development services includes:
//                 </p>
//             </div>
//             {/* Cards section */}
//             <div className='flex flex-wrap justify-center gap-6'>
//                 {cards.map((card, index) => (
//                     <div
//                         key={index}
//                         className={flex flex-col justify-between p-6 bg-gray-50 rounded-lg shadow-md w-full sm:w-[40%] lg:w-[30%] transition-all duration-300 ${
//                             expandedCard === index ? 'h-auto' : 'h-[100px]'
//                         }}
//                     >
//                         <div className='flex items-center justify-between'>
//                             <div className='flex items-center gap-4'>
//                                 <FontAwesomeIcon icon={faLayerGroup} size='2xl' />
//                                 <h2 className='text-lg font-semibold text-gray-900'>{card.title}</h2>
//                             </div>
//                             <FontAwesomeIcon
//                                 icon={expandedCard === index ? faMinus : faPlus}
//                                 onClick={() => toggleCard(index)}
//                                 className="cursor-pointer"
//                             />
//                         </div>
//                         {expandedCard === index && (
//                             <div className="mt-4">
//                                 <p className="text-gray-700">{card.description}</p>
//                                 <div className='mt-4 flex items-center gap-2 text-blue-600 cursor-pointer'>
//                                     <span>Explore Now</span>
//                                     <FontAwesomeIcon icon={faArrowRight} />
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;
