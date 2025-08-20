import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Users, Zap, Brain, MapPin, Phone, Mail, Instagram, Facebook, Clock, Star, ArrowRight, Play, Calendar, ChevronRight } from 'lucide-react';
import HeadsetHire from './components/HeadsetHire';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Group Fitness",
      icon: Zap,
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      description: "Strength, conditioning, and movement training that builds both physical power and mental resilience.",
      benefits: ["Functional strength training", "Metabolic conditioning", "Movement mobility", "Community support"],
      cta: "Start Your Fitness Journey"
    },
    {
      title: "Breathwork",
      icon: Heart,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      description: "Guided breathing sessions for nervous system regulation, energy activation, and deep healing.",
      benefits: ["Stress & anxiety relief", "Enhanced energy levels", "Nervous system regulation", "Emotional release"],
      cta: "Experience Breathwork"
    },
    {
      title: "Dance",
      icon: Users,
      image: "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg",
      description: "Ecstatic dance, rhythm, and movement expression that unleashes your creative spirit and joy.",
      benefits: ["Creative expression", "Emotional freedom", "Body confidence", "Community connection"],
      cta: "Move Your Soul"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Airmana has transformed not just my body, but my entire approach to wellness. The combination of breathwork and fitness is pure magic.",
      rating: 5
    },
    {
      name: "James K.",
      text: "I've never experienced anything like the dance sessions here. It's therapy, fitness, and pure joy all rolled into one.",
      rating: 5
    },
    {
      name: "Emma L.",
      text: "The community at Airmana is incredible. Every class feels like coming home to a family that supports your growth.",
      rating: 5
    }
  ];

  const schedule = [
    { day: "Monday", classes: ["6:00am Group Fitness", "6:10pm Forex & Crypto Trading", "7:10pm Breathwork"] },
    { day: "Tuesday", classes: ["5:00am Group Fitness", "6:00am Group Fitness", "10:00am Group Fitness"] },
    { day: "Wednesday", classes: ["6:00am Group Fitness", "7:00am Group Fitness"] },
    { day: "Thursday", classes: ["5:00am Group Fitness", "6:00am Group Fitness", "7:00am Group Fitness"] },
    { day: "Friday", classes: ["5:00am Group Fitness", "6:10pm Forex & Crypto Trading", "7:10pm Breathwork"] },
    { day: "Saturday", classes: ["8:00am Dance", "9:10am Meditation"] },
    { day: "Sunday", classes: [] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Book Now Button */}
      <a href="https://passm8.com/airmana#upcoming-classes" className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg z-50 font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105">
        Book Now
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-emerald-50 bg-opacity-95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-emerald-600">AIRMANA</div>
            </div>
            
            <div className="hidden md:flex space-x-8 justify-center flex-1">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#timetable" className="text-gray-700 hover:text-emerald-600 transition-colors">Timetable</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/headset-hire" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all">
                Headset Hire
              </Link>
              <a href="https://passm8.com/airmana#upcoming-classes" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all">
                Join Today
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-900">
          {/* Galactic energy effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          {/* Airmana logo as background */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 z-20"
            style={{
              backgroundImage: "url('/Airmana-logo/Airmana-logo-transparent.png')"
            }}
          ></div>
          
          {/* Subtle particle effects */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping delay-700"></div>
            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
        
        <div className="relative z-30 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Breathe. Move.<br />
            Connect. Transform.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover the power of holistic wellness where fitness, breathwork, meditation, and dance unite to transform your body, mind, and spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://passm8.com/airmana#upcoming-classes" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center gap-2">
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Welcome to Airmana</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Labyrinth Central, Airmana is more than just a wellness studio—we're a transformative community where ancient wisdom meets modern movement.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our holistic approach integrates four powerful pillars: dynamic group fitness, transformative breathwork, mindful meditation, and expressive dance. Each element works in harmony to create a complete wellness experience that nourishes your body, calms your mind, and ignites your spirit.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Energy</h3>
                  <p className="text-sm text-gray-600">Dynamic workouts that energize your body</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deep Healing</h3>
                  <p className="text-sm text-gray-600">Breathwork and meditation for inner peace</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mindful Focus</h3>
                  <p className="text-sm text-gray-600">Meditation practices for clarity and awareness</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Creative Expression</h3>
                  <p className="text-sm text-gray-600">Dance and movement for joyful self-expression</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
                alt="Airmana Community"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Four Pillars of Wellness</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each pillar is designed to work in harmony, creating a complete transformation of body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="https://passm8.com/airmana#upcoming-classes" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all block text-center">
                    {service.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Airmana?</h2>
            <p className="text-lg text-gray-600">Join hundreds of members who have transformed their lives with our holistic approach</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Supportive Community</h3>
              <p className="text-gray-600">Join a welcoming community where everyone supports each other's wellness journey.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Holistic Integration</h3>
              <p className="text-gray-600">Our four pillars work together to create complete mind-body transformation.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">See real transformations in strength, flexibility, mental clarity, and emotional wellbeing.</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section id="timetable" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Weekly Timetable</h2>
            <p className="text-lg text-gray-600">Find the perfect class time that fits your schedule</p>
          </div>

          <div className="grid lg:grid-cols-7 gap-4 mb-12">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-center mb-4 text-gray-900 py-2 bg-emerald-50 rounded-lg">
                  {day.day}
                </h3>
                <div className="space-y-3">
                  {day.classes.map((classTime, idx) => (
                    <div key={idx} className="text-sm bg-gray-50 p-3 rounded-lg">
                      <div className="font-semibold text-emerald-600 mb-1">
                        {classTime.split(' ')[0]}
                      </div>
                      <div className="text-gray-600">
                        {classTime.substring(classTime.indexOf(' ') + 1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://passm8.com/airmana#upcoming-classes" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              Book Your Classes
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Visit Us at Labyrinth Central</h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Labyrinth Central, Bundaberg, Airmana is easily accessible and perfectly positioned for your wellness journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <a href="https://maps.app.goo.gl/WxHD3qw6mBxAAYoW8" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      Labyrinth Central, Bundaberg, Australia
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+61413428182" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      +61 413 428 182
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@airmana.com.au" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      info@airmana.com.au
                    </a>
                  </div>
                </div>
              </div>
            
              <div className="mt-8">
                <p className="text-gray-600 mb-4">Stay connected with our community</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/airmana_/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/airmanaenergy/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Started Today</h3>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="What are your wellness goals?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all">
                  Start My Wellness Journey
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 text-emerald-400">Airmana</div>
            <p className="text-gray-400 mb-6">Breathe. Move. Connect. Transform.</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://www.instagram.com/airmana_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/airmanaenergy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Airmana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headset-hire" element={<HeadsetHire />} />
      </Routes>
    </Router>
  );
};

export default App;