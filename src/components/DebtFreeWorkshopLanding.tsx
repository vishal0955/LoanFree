import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  
  faClock, 
  faUsers, 
  faCalculator, 
  faHandshake, 
  faMoneyBillWave, 
  faFileExcel, 
  faFileAlt, 
  faDownload, 
  faCheckCircle, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const DebtFreeWorkshopLanding = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  className="h-8 w-auto" 
                  src="/logo_placeholder.png" 
                  alt="Logo" 
                />
              </div>
            </div>
            <div className="flex items-center">
              <a 
                href="#register" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button bg-orange-500 text-white hover:bg-orange-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Register Now
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <main>
        <div className="relative bg-gradient-to-r from-orange-500 to-green-500">
          {/* <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">Debt-Free Life Workshop</h1>
                <p className="text-xl mb-6">Master your finances in just 2 hours</p>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>2 Hours</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>Limited Seats</span>
                  </div>
                </div>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-button text-white hover:bg-white hover:text-orange-500">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  Join via WhatsApp
                </button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/financial-management-image.png" 
                  alt="Workshop Preview" 
                  className="w-full object-contain" 
                />
              </div>
            </div>
          </div> */}
        </div>

        {/* Featured Section */}
        <div className="bg-white py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="flex items-center">
                <img 
                  src="/logo_placeholder.png" 
                  alt="Economic Times" 
                  className="h-8" 
                />
                <span className="ml-2 text-gray-600">Featured in Economic Times</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="text-green-500 text-2xl mr-2" 
                />
                <span className="text-gray-600">50,000+ Loans Closed</span>
              </div>
            </div>

            {/* Workshop Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* EMI Management */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-orange-500 mb-4">
                  <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">EMI Management</h3>
                <p className="text-gray-600 mb-4">
                  Learn 10 proven hacks to manage your EMIs effectively and allocate your salary wisely.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Salary allocation strategies
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Budgeting techniques
                  </li>
                </ul>
              </div>

              {/* Lender Negotiation */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-orange-500 mb-4">
                  <FontAwesomeIcon icon={faHandshake} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lender Negotiation</h3>
                <p className="text-gray-600 mb-4">
                  Master the art of negotiating with lenders to reduce interest rates from 28% to 12%.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Interest rate reduction
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Communication strategies
                  </li>
                </ul>
              </div>

              {/* Side Income */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-orange-500 mb-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Side Income</h3>
                <p className="text-gray-600 mb-4">
                  Discover ways to earn extra ₹15,000/month through side hustles and freelancing.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Freelancing opportunities
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-green-500 mr-2" 
                    />
                    Digital marketing skills
                  </li>
                </ul>
              </div>
            </div>

            {/* Downloads Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Debt Tracker */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon 
                    icon={faFileExcel} 
                    className="text-green-500 text-2xl mr-3" 
                  />
                  <h3 className="text-xl font-semibold">Free Debt Tracker</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Download our comprehensive Excel sheet to track and manage your debts effectively.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button bg-green-500 text-white hover:bg-green-600">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download Template
                </button>
              </div>

              {/* Settlement Templates */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon 
                    icon={faFileAlt} 
                    className="text-orange-500 text-2xl mr-3" 
                  />
                  <h3 className="text-xl font-semibold">Settlement Templates</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get ready-to-use loan settlement letter templates for different scenarios.
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button bg-orange-500 text-white hover:bg-orange-600">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download Templates
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Debt-Free Journey?</h2>
            <p className="text-gray-600 mb-6">
              Join our workshop and transform your financial future today.
            </p>
            <a 
              href="#register" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-button bg-orange-500 text-white hover:bg-orange-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Register Now
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600">
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default DebtFreeWorkshopLanding;
