import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faUserTie, 
  faHandHoldingUsd, 
  faUsers, 
  faPlay,
  faLock,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const LoanFreedomProgram = () => {
  const [timer, setTimer] = useState('02:00:00');

  useEffect(() => {
    let time = 7200; // 2 hours in seconds
    const timerInterval = setInterval(() => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      
      setTimer(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      
      if (time > 0) {
        time--;
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="bg-gray-50 font-['Inter']">
      {/* Header */}
      <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-4">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <img 
              src="/api/placeholder/120/32" 
              alt="Logo" 
              className="h-8"
            />
            <button className="!rounded-button bg-custom px-6 py-2 font-semibold hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Loan ki EMI Ne Li Hai Jaan? 3 Steps Mein Paayein 'Loan Se Freedom'!
                </h1>
                <p className="text-xl mb-8">Join ₹699 Webinar Aur Paayein:</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Expert Mentorship",
                    "Har Mahine 1000 members ko debt free krne ke liye Financial Support",
                    "Become part of an Elite Community for more financial assistance"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-custom mr-3" 
                      />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <div className="text-sm mb-2">Limited Time Offer</div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">284</span>
                      <span className="text-gray-400">/1000 slots left</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold">{timer}</span>
                      <span className="text-gray-400"> remaining</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-custom"></div>
                  </div>
                </div>

                <button className="!rounded-button bg-custom px-8 py-4 text-lg font-bold hover:bg-opacity-90 transition-all">
                  Abhi Enroll Karein – Pehle 100 Ko Extra ₹5000 Financial support!
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Financial Freedom" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Program Section */}
        <section className="py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: faUserTie,
                  title: "Expert Mentorship",
                  description: "Get personalized guidance from financial experts with proven track record."
                },
                {
                  icon: faHandHoldingUsd,
                  title: "Financial Support",
                  description: "Monthly financial assistance to help you achieve debt-free status faster."
                },
                {
                  icon: faUsers,
                  title: "Community Support",
                  description: "Join an exclusive community of like-minded individuals on the same journey."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-4xl text-custom mb-4" 
                  />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  achievement: "Debt Free in 6 months",
                  quote: '"The program helped me clear my ₹15L loan in just 6 months. The strategies really work!"'
                },
                {
                  name: "Sarah Johnson",
                  achievement: "Saved ₹8000 monthly",
                  quote: '"I learned to manage my finances better and now save ₹8000 every month!"'
                },
                {
                  name: "Mike Brown",
                  achievement: "Reduced EMIs by 40%",
                  quote: '"The expert guidance helped me restructure my loans and reduce EMIs significantly."'
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon 
                      icon={faUserCircle} 
                      className="text-4xl text-gray-400 mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold">{story.name}</h4>
                      <p className="text-gray-600">{story.achievement}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{story.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Limited Time Offer Section */}
        <section className="py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Limited Time Offer</h2>
            <div className="inline-block bg-white rounded-lg shadow-sm p-8">
              <div className="text-5xl font-bold text-custom mb-4">₹699</div>
              <div className="text-gray-600 mb-6">
                <span className="line-through">Regular Price: ₹1999</span>
                <span className="text-custom font-semibold ml-2">65% OFF</span>
              </div>
              <button className="!rounded-button bg-custom text-white px-8 py-4 text-lg font-bold hover:bg-opacity-90 transition-all mb-6">
                Secure Your Spot Now
                <FontAwesomeIcon icon={faLock} className="ml-2" />
              </button>
              <div className="flex justify-center space-x-4">
                <img 
                  src="/api/placeholder/240/32" 
                  alt="Payment Methods" 
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/api/placeholder/120/32" 
                alt="Logo" 
                className="h-8 mb-4"
              />
              <p className="text-gray-400">Your path to financial freedom starts here.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {["About Us", "How It Works", "Success Stories"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {["FAQs", "Contact Us", "Privacy Policy"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-400 hover:text-white"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Financial Freedom Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoanFreedomProgram;
