import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlayCircle, 
  faCheckCircle, 
  faUserTie,
  
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Plyr from 'plyr';

const Video1 = () => {
  useEffect(() => {
    // Initialize Plyr video player
    const player = new Plyr('#player');
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-green-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  className="h-8 w-auto" 
                  src="/logo_placeholder.png" 
                  alt="लोगो" 
                />
              </div>
            </div>
            <div className="flex items-center">
              <button className="rounded-button bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-6 py-2 font-medium text-sm transition-all duration-300">
                अभी रजिस्टर करें
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video and Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <div className="plyr__video-embed" id="player">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1" 
                allowFullScreen 
                allow="autoplay"
              ></iframe>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <button className="text-white text-6xl">
                <FontAwesomeIcon icon={faPlayCircle} />
              </button>
            </div>
          </div>

          {/* Header Content */}
          <div>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <img 
                  src="/economic-times-favicon.ico" 
                  className="w-4 h-4 mr-2" 
                  alt="Economic Times" 
                />
                Featured in Economic Times
              </span>
              <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
                50,000+ Loans Closed! 🎯
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-6">
              Watch Sudeep (Corporate employee) Kaise chukaya ₹2L Loan – 6 Months Mein!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              "Dosto, yeh webinar sirf ₹699 ka nahi, life-changing hai!"
            </p>
            <button className="rounded-button bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white px-8 py-4 text-lg font-medium w-full transition-all duration-300">
              अभी ₹699 में बुक करें
            </button>
            <a 
              href="https://wa.me/+919XXXXXXXXX" 
              className="rounded-button bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-medium w-full mt-4 transition-all duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-xl" />
              WhatsApp पर बात करें
            </a>
          </div>
        </div>

        {/* Why Join Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-8 text-center">क्यों जॉइन करें?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "हर महीने EMIs के जाल में फंसे हो?",
              "क्रेडिट कार्ड बिल्स से घर वालों को छुपाते हो?",
              "लोन रिकवरी के कॉल्स से डर लगता है?",
              "स्मॉल बिजनेस है पर प्रॉफिट सब EMI में जाता है?"
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-4">
                <FontAwesomeIcon 
                  icon={faCheckCircle} 
                  className="text-green-500 text-xl mt-1" 
                />
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Secrets Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-8 text-center">
            हमारे 3 Secrets से करें Debt को Bye-Bye
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: faUserTie, 
                title: "मेंटरशिप", 
                description: "लेंडर्स से बात करने का कॉन्फिडेंस!" 
              },
              { 
                icon: faUserTie, 
                title: "फंडिंग", 
                description: "पहले 1000 को हर महीने ₹10k-₹30k तक का सपोर्ट!" 
              },
              { 
                icon: faUserTie, 
                title: "कम्युनिटी", 
                description: "आप जैसे 10,000+ लोगों का साथ!" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-orange-500 text-2xl" 
                  />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 border-t mt-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            © 2024 Debt Solution. सर्वाधिकार सुरक्षित.
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Video1;
