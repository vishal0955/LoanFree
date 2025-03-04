import React, { useEffect } from 'react';

const Hero1 = () => {
  useEffect(() => {
    function updateTimer() {
      const timerElement = document.getElementById('timer');
      let time = 7200; // 2 hours in seconds

      setInterval(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time > 0) {
          time--;
        }
      }, 1000);
    }

    updateTimer();
  }, []);

  return (
    <div className="bg-gray-50 font-['Inter']">
      <header className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-4">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8" />
            <button className="!rounded-button bg-custom px-6 py-2 font-semibold hover:bg-opacity-90 transition-all">Contact Us</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Break Free from Loan EMIs in 3 Simple Steps</h1>
                <p className="text-xl mb-8">अभी ज्वाइन करें हमारा ₹699 का एक्सक्लूसिव वेबिनार प्रोग्राम और पाएं:</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-custom mr-3"></i>
                    <span>एक्सपर्ट फाइनेंशियल मेंटरशिप</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-custom mr-3"></i>
                    <span>1000 मेंबर्स के लिए मंथली फाइनेंशियल सपोर्ट</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-custom mr-3"></i>
                    <span>एलीट फाइनेंशियल कम्युनिटी में एक्सेस</span>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <div className="text-sm mb-2">Limited Time Offer</div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">284</span>
                      <span className="text-gray-400">/1000 slots left</span>
                    </div>
                    <div>
                      <span className="text-xl font-bold" id="timer">02:00:00</span>
                      <span className="text-gray-400"> remaining</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-custom"></div>
                  </div>
                </div>
                <button className="!rounded-button bg-custom px-8 py-4 text-lg font-bold hover:bg-opacity-90 transition-all">
                  Enroll Now - First 100 Get Extra ₹5000 Support
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div className="relative">
                <img src="https://creatie.ai/ai/api/search-image?query=A 3D vector-style image with a clean, solid background showing financial freedom concept with broken chains, calculator, and rising graphs, modern minimalist style&width=600&height=600&orientation=squarish&removebg=true&flag=74513528-c7d2-414c-9d10-ea3dfbe79f58&flag=78777c56-0049-4d12-8619-3dbc3772d9a4" alt="Financial Freedom" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <i className="fas fa-user-tie text-4xl text-custom mb-4"></i>
                <h3 className="text-xl font-semibold mb-4">Expert Mentorship</h3>
                <p className="text-gray-600">Get personalized guidance from financial experts with proven track record.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <i className="fas fa-hand-holding-usd text-4xl text-custom mb-4"></i>
                <h3 className="text-xl font-semibold mb-4">Financial Support</h3>
                <p className="text-gray-600">Monthly financial assistance to help you achieve debt-free status faster.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <i className="fas fa-users text-4xl text-custom mb-4"></i>
                <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                <p className="text-gray-600">Join an exclusive community of like-minded individuals on the same journey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-circle text-4xl text-gray-400 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-gray-600">Debt Free in 6 months</p>
                  </div>
                </div>
                <p className="text-gray-600">"The program helped me clear my ₹15L loan in just 6 months. The strategies really work!"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-circle text-4xl text-gray-400 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600">Saved ₹8000 monthly</p>
                  </div>
                </div>
                <p className="text-gray-600">"I learned to manage my finances better and now save ₹8000 every month!"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <i className="fas fa-user-circle text-4xl text-gray-400 mr-4"></i>
                  <div>
                    <h4 className="font-semibold">Mike Brown</h4>
                    <p className="text-gray-600">Reduced EMIs by 40%</p>
                  </div>
                </div>
                <p className="text-gray-600">"The expert guidance helped me restructure my loans and reduce EMIs significantly."</p>
              </div>
            </div>
          </div>
        </section>

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
                <i className="fas fa-lock ml-2"></i>
              </button>
              <div className="flex justify-center space-x-4">
                <img src="https://ai-public.creatie.ai/gen_page/payment_icons.png" alt="Payment Methods" className="h-8" />
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default Hero1;