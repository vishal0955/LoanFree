import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const LastChanceEnrollment = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto max-w-8xl px-4 py-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Time Remaining Pulse */}
          <div className="bg-custom/10 rounded-lg p-4 inline-flex items-center space-x-2 animate-pulse">
            <FontAwesomeIcon icon={faClock} className="text-custom" />
            <span className="font-semibold text-custom">
              11 Minutes Left – 23 Slots Remaining!
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Abhi Tak Soch Rahe Ho?<br/>
            <span className="text-custom">
              EMI ka tension aur saalo tak nahi jhelna hai na?
            </span>
          </h1>

          {/* Featured Badges */}
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <img 
                src="/api/placeholder/120/32" 
                alt="Economic Times" 
                className="h-8"
              />
              <span className="font-medium">Featured in Economic Times</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <FontAwesomeIcon 
                icon={faCheckCircle} 
                className="text-green-500 text-xl"
              />
              <span className="font-medium">50,000+ Loans Closed!</span>
            </div>
          </div>

          {/* Enrollment Button */}
          <button className="!rounded-button bg-custom text-white text-xl font-semibold px-8 py-4 w-full md:w-auto hover:bg-custom/90 transition-colors animate-bounce">
            Last Chance – Enroll Karein aur Aaj Hi Shuruat Karein!
          </button>

          {/* WhatsApp Contact */}
          <div className="pt-8 border-t">
            <p className="text-gray-600 mb-4">Need Help?</p>
            <a 
              href="https://wa.me/91XXXXXXXXXX?text=FREEDOM" 
              className="!rounded-button inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 font-medium hover:bg-[#22c35e] transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              <span>WhatsApp "FREEDOM" to +91 XXXXX XXXXX</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LastChanceEnrollment;
