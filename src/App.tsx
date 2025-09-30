import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Prism from './components/Prism';
import { Heart, Users, Zap, Brain, MapPin, Phone, Mail, Clock, Star, Calendar, Instagram, Facebook } from 'lucide-react';
import { AdminProvider } from './contexts/AdminContext';
import { AdminToolbar } from './components/AdminToolbar';
import { AdminLoginModal } from './components/AdminLoginModal';
import { useKeySequence } from './hooks/useKeySequence';
import LazyImage from './components/LazyImage';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { ServiceCard } from './components/ui/ServiceCard';
import { Button } from './components/ui/Button';
import { SITE_CONFIG, SERVICES, SCHEDULE, COLORS } from './constants';

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

  // Icon mapping for services
  const iconMap = { Zap, Heart, Users };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Book Now Button */}
      <Button
        href={SITE_CONFIG.booking.url}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 shadow-lg z-50 transform hover:scale-105"
      >
        Book Now
      </Button>

      {/* Navigation */}
      <Navigation />

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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">High Energy</h3>
              <p className="text-xs md:text-sm text-gray-600">Dynamic workouts that energize your body</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Deep Healing</h3>
              <p className="text-xs md:text-sm text-gray-600">Breathwork and meditation for inner peace</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Brain className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#E9BDC7' }} />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Mindful Focus</h3>
              <p className="text-xs md:text-sm text-gray-600">Meditation practices for clarity and awareness</p>
            </div>
            <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
              <div className="bg-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
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
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={iconMap[service.icon as keyof typeof iconMap]}
                image={service.image}
                description={service.description}
                benefits={service.benefits}
                cta={service.cta}
                isActive={activeService === index}
                onHover={() => setActiveService(index)}
              />
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
      {SCHEDULE.map((day, index) => (
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
            <Button href={SITE_CONFIG.booking.url} className="inline-flex items-center gap-2 transform hover:scale-105" size="lg">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Book Your Classes
            </Button>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="below-fold py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Visit Us in {SITE_CONFIG.contact.address.split(',')[1]}</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Located in Bundaberg Central, easily accessible and perfectly positioned for your wellness journey.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Location</p>
                    <a href={SITE_CONFIG.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      {SITE_CONFIG.contact.address}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">Email</p>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm md:text-base text-emerald-600 hover:text-emerald-700 transition-colors">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            
              <div className="mt-6 md:mt-8">
                <p className="text-sm md:text-base text-gray-600 mb-4">Stay connected with our community</p>
                <div className="flex gap-4">
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors" aria-label="Facebook">
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
                window.location.href = SITE_CONFIG.booking.url;
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
                <Button type="submit" className="w-full">
                  Start My Wellness Journey
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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