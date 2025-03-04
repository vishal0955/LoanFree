import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faInfoCircle 
} from '@fortawesome/free-solid-svg-icons';

const SuccessStories = () => {
  const successStories = [
    {
      name: "Rahul",
      title: "Delhi College Student",
      imageUrl: "/rahul-profile.jpg",
      quote: "iPhone 16 ka ₹70 hazar ka loan tha, par webinar ke side hustle ideas se ab ₹15k/month kama leta hoon! Aur financial support se 2 EMI bhi close karane me help ki. Best ₹699 spent!"
    },
    {
      name: "Asha Ben",
      title: "Ahmedabad",
      imageUrl: "/asha-ben-profile.jpg",
      quote: "5 microloans ka bojh kam karne mein madad mili. Community ne financially support kiya. Digital work opportunity se extra income bhi hui!"
    }
  ];

  const fundingSteps = [
    "Webinar join karo (₹699 pay karo)",
    "Homework assignment complete karo (simple debt tracker bharein)",
    "First 1000 ko next 10 days mein funding direct account mein!"
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Dekho kaise logon ne apni life badli
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <img 
                  src={story.imageUrl} 
                  className="w-24 h-24 rounded-full object-cover" 
                  alt={story.name} 
                />
                <div>
                  <div className="mb-4">
                    <FontAwesomeIcon 
                      icon={faQuoteLeft} 
                      className="text-orange-500 opacity-25 text-xl" 
                    />
                    <p className="text-gray-700 mt-2">{story.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">{story.name}</h4>
                      <p className="text-gray-600">{story.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Funding Process */}
        <div className="max-w-5xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Funding Kaise Milega?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-semibold">
                    {index + 1}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Info */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-500/10 border-2 border-orange-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon 
                icon={faInfoCircle} 
                className="text-orange-500 text-2xl" 
              />
              <p className="text-lg text-gray-900 font-semibold">
                Funding ke liye eligibility: Sirf webinar attend karna aur homework submit karna!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
