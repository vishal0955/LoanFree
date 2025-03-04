import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, 
  faHandshake, 
  faShieldAlt, 
  faCheckCircle,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const WebinarEnrollment = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Webinar kab hai?",
      answer: "Har Sunday 7 PM. Recording milta hai agar miss karo!"
    },
    {
      question: "Funding kab tak milegi?",
      answer: "Pehle 1000 enrollments ko next month EMI ki funding."
    },
    {
      question: "Community ka access kaise milega?",
      answer: "WhatsApp group link webinar ke baad share karenge!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <img 
            src="/api/placeholder/180/48" 
            alt="Logo" 
            className="h-12 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">Join The Webinar</h1>
          
          <div className="flex justify-center items-center gap-4">
            <span className="text-gray-400 line-through text-2xl">₹4,999</span>
            <span className="text-custom text-4xl font-bold">₹699</span>
            <span className="bg-custom text-white px-3 py-1 rounded-lg text-sm">86% OFF</span>
          </div>
          
          <div className="flex justify-center gap-4 mb-4">
            <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm flex items-center">
              <img 
                src="/api/placeholder/16/16" 
                className="w-4 h-4 mr-2"
              />
              Featured in Economic Times
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              50,000+ Loans Closed!
            </span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-orange-50 rounded-xl p-8 hover:shadow-lg transition-shadow shadow-md">
            <div className="text-center">
              <FontAwesomeIcon icon={faBook} className="text-4xl text-custom mb-4" />
              <h3 className="text-xl font-semibold mb-4">Pitch Perfection Playbook</h3>
              <p className="text-gray-300">Complete guide to successfully pitch your startup</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-shadow shadow-md">
            <div className="text-center">
              <FontAwesomeIcon icon={faHandshake} className="text-4xl text-custom mb-4" />
              <h3 className="text-xl font-semibold mb-4">Investor Engagement</h3>
              <p className="text-gray-300">Opportunity to meet top investors and get funding</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 !rounded-button text-lg w-full md:w-auto">
            Enroll Now
          </button>
          <div className="mt-4">
            <a href="https://wa.me/your-number" className="inline-flex items-center text-green-600">
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-8 mb-16 text-center shadow-md">
          <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-custom mb-6" />
          <h2 className="text-2xl font-bold mb-4">Shubh Laabh Guarantee</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Webinar attend karo, aur agar kuch nahi sikha, toh 100% paise wapas!
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                >
                  {faq.question}
                  <FontAwesomeIcon 
                    icon={openFAQ === index ? faChevronUp : faChevronDown} 
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <footer className="bg-gray-100 py-8">
        <div className="max-w-8xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </footer> */}
    </div>
  );
};

export default WebinarEnrollment;
