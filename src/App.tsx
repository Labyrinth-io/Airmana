import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Prism from './components/prism';
import { Heart, Users, Zap, Brain, MapPin, Phone, Mail, Instagram, Facebook, Clock, Star, ArrowRight, Play, Calendar, ChevronRight } from 'lucide-react';
import { AdminProvider } from './contexts/AdminContext';
import { AdminToolbar } from './components/AdminToolbar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { useKeySequence } from './hooks/useKeySequence';
import LazyImage from './components/LazyImage';

// Lazy load components that aren't needed immediately
const HeadsetHire = React.lazy(() => import('./components/HeadsetHire'));
const LoginPage = React.lazy(() => import('./components/LoginPage'));

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Admin access via key sequence
  useKeySequence('admin', () => {
    setShowLoginModal(true);
  });

  const services = [
    {
      title: "Group Fitness",
      icon: Zap,
      image: "/images/Group Fitness.webp",
      description: "Strength, conditioning, and movement training that builds both physical power and mental resilience.",
      benefits: ["Functional strength training", "Metabolic conditioning", "Movement mobility", "Community support"],
      cta: "Start Your Fitness Journey"
    },
    {
      title: "Breathwork",
      icon: Heart,
      image: "/images/breathwork.webp",
      description: "Guided breathing sessions for nervous system regulation, energy activation, and deep healing.",
      benefits: ["Stress & anxiety relief", "Enhanced energy levels", "Nervous system regulation", "Emotional release"],
      cta: "Experience Breathwork"
    },
    {
      title: "Martial Arts",
      icon: Users,
      image: "/images/airmana fighting.webp",
      description: "Boxing and capoeira training that builds power, speed, and control.",
      benefits: ["Creative expression", "Emotional freedom", "Body confidence", "Community connection"],
      cta: "Move Your Soul"
    }
  ];

  const schedule = [
    { day: "Monday", classes: ["5:00am Group Fitness", "7:00am"] },
    { day: "Tuesday", classes: ["7:00am Group Fitness", "10:00am Group Fitness"] },
    { day: "Wednesday", classes: ["5:00am Group Fitness", "7:00am Group Fitness"] },
    { day: "Thursday", classes: ["5:00am Group Fitness", "6:00am Group Fitness", "7:00am Group Fitness"] },
    { day: "Friday", classes: ["6:00am Group Fitness", "7:00am Group Fitness", "10:00am Group Fitness"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Book Now Button */}
      <a href="https://passm8.com/airmana#upcoming-classes" className="fixed bottom-4 right-4 md:bottom-6 md:right-6 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full shadow-lg z-50 font-semibold transition-all transform hover:scale-105" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
        <span className="airmana-logo">Book Now</span>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-sm z-40 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <div className="flex items-center gap-3">
              <div className="text-xl md:text-2xl font-bold airmana-logo">AIRMANA</div>
            </div>
            
            <div className="hidden lg:flex space-x-6 xl:space-x-8 justify-center flex-1">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">About</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Services</a>
              <a href="#timetable" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Timetable</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors airmana-logo">Contact</a>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <a href="/headset-hire" className="hidden sm:block px-3 md:px-6 py-2 rounded-full transition-all text-sm md:text-base" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
                <span className="airmana-logo">Headset Hire</span>
              </a>
              <a href="https://passm8.com/airmana#upcoming-classes" className="px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base shadow-lg" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
                <span className="airmana-logo">Join Today</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="relative text-white overflow-hidden" style={{ height: '100vh' }}>
  <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000000' }}>
    <Prism
      animationType="rotate"
      timeScale={0.5}
      height={3.5}
      baseWidth={5.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      noise={0.1}
      glow={2}
      transparent={false}
      bloom={1.5}
    />
    
    {/* Airmana logo positioned below header */}
    <div className="absolute inset-0 flex items-center justify-center z-20" style={{ paddingTop: '88px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '20px' }}>
      <picture>
        <source srcSet="/images/Airmanalogotransparent.webp" type="image/webp" />
        <img 
          src="/images/Airmanalogotransparent.webp"
          alt="Airmana Logo"
          className="opacity-90"
          style={{ 
            maxWidth: '90vw', 
            maxHeight: 'calc(100vh - 128px)', 
            objectFit: 'contain',
            width: '100%',
            height: 'auto'
          }}
          width="800"
          height="600"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="below-fold py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Welcome to Airmana</h2>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-4xl mx-auto">
              Airmana Fit is a dynamic Fitness Hub in the heart of Bundaberg City. Our facility offers a variety of group fitness classes, functional strength training, educational forums, martial arts and skill-based workshops for adults, teens and children - all designed to enhance strength, endurance, mobility, and overall wellbeing.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
              Recovery is a central part of the Airmana Fit experience as we provide contrast therapy options, including an infrared sauna and  ice bath, helping members reduce inflammation, restore energy, and support nervous system recovery.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto"> With expert coaching, structured programs, and a focus on both training and recovery, Airmana Fit creates a space where you can train your mind and body, develop skills, and elevate your overall health—all while being part of a supportive, holistic community.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#2c2f4c] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">High Energy</h3>
              <p className="text-xs md:text-sm text-gray-600">Dynamic workouts that energize your body</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#2c2f4c] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Deep Healing</h3>
              <p className="text-xs md:text-sm text-gray-600">Breathwork and meditation for inner peace</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#2c2f4c] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Brain className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Mindful Focus</h3>
              <p className="text-xs md:text-sm text-gray-600">Meditation practices for clarity and awareness</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-[#2c2f4c] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Creative Expression</h3>
              <p className="text-xs md:text-sm text-gray-600">Dance and movement for joyful self-expression</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Our Three Pillars of Wellness</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Each pillar is designed to work in harmony, creating a complete transformation of body, mind, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:col-span-1"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width="400"
                    height="300"
                    webpSrc={service.image}
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-#e4bdc7" />
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://passm8.com/airmana#upcoming-classes" className="w-full py-2 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all block text-center" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
                    <span className="airmana-logo">{service.cta}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="below-fold py-12 md:py-16 lg:py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Why Choose Airmana?</h2>
            <p className="text-base md:text-lg text-gray-600">Join hundreds of members who have transformed their lives with our holistic approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center">
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">Supportive Community</h3>
              <p className="text-sm md:text-base text-gray-600">Join a welcoming community where everyone supports each other's wellness journey.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Brain className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">Holistic Integration</h3>
              <p className="text-sm md:text-base text-gray-600">Our three pillars work together to create complete mind-body transformation.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900">Proven Results</h3>
              <p className="text-sm md:text-base text-gray-600">See real transformations in strength, flexibility, mental clarity, and emotional wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section id="timetable" className="below-fold py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Weekly Timetable</h2>
            <p className="text-base md:text-lg text-gray-600">Find the perfect class time that fits your schedule</p>
          </div>

          <div className="timetable-section">
  <div className="grid-container-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {schedule.map((day, index) => (
        <div key={index} className="day-column">
          <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow w-full">
            <h1 className="text-sm md:text-base font-semibold text-center mb-4 text-white py-2 bg-indigo-700 rounded-md">
              {day.day}
            </h1>
            <div className="space-y-3">
              {day.classes.map((classTime, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 hover:border-slate-300"
                >
                  <div className="font-semibold text-indigo-700 text-sm md:text-base tabular-nums">
                    {classTime.split(' ')[0]}
                  </div>
                  <div className="text-slate-600 text-xs md:text-sm">
                    {classTime.substring(classTime.indexOf(' ') + 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


          <div className="text-center">
            <a href="https://passm8.com/airmana#upcoming-classes" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all transform hover:scale-105" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span className="airmana-logo">Book Your Classes</span>
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="below-fold py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Visit Us in Bundaberg</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Located in Bundaberg Central, easily accessible and perfectly positioned for your wellness journey.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Location</p>
                    <a href="https://maps.app.goo.gl/WxHD3qw6mBxAAYoW8" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      8 Electra Street, Bundaberg, Australia
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Phone</p>
                    <a href="tel:+61413428182" className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      +61 413 428 182
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@airmana.com.au" className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      info@airmana.com.au
                    </a>
                  </div>
                </div>
              </div>
            
              <div className="mt-6 md:mt-8">
                <p className="text-sm md:text-base text-gray-600 mb-4">Stay connected with our community</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/airmana_/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href="https://www.facebook.com/airmanaenergy/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Get Started Today</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Here you would integrate with Google Sheets
                // For now, we'll redirect to the booking page
                window.location.href = 'https://passm8.com/airmana#upcoming-classes';
              }}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="What are your wellness goals?"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-2 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all" style={{ backgroundColor: '#2c2e4d', color: '#f05091' }}>
                  <span className="airmana-logo">Start My Wellness Journey</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="below-fold bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-emerald-400">Airmana</div>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">Breathe. Move. Connect. Transform.</p>
            <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <a href="https://www.instagram.com/airmana_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.facebook.com/airmanaenergy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">© 2025 Airmana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Admin Login Modal */}
      <AdminLoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />

      {/* Admin Toolbar */}
      <AdminToolbar />
    </div>
  );
};

const App = () => {
  return (
    <AdminProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/headset-hire" element={<HeadsetHire />} />
            <Route path="/admin/login" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AdminProvider>
  );
};

export default App;