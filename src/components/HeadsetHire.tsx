import React, { useState } from 'react';
import { Headphones, CheckCircle, Clock, Shield, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';

const HeadsetHire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    duration: '',
    quantity: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your lead collection system
    console.log('Headset hire inquiry:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      duration: '',
      quantity: '',
      eventType: '',
      message: ''
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Professional-grade wireless headsets with crystal clear audio"
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Hourly, daily, or weekly rental options to suit your needs"
    },
    {
      icon: CheckCircle,
      title: "Full Support",
      description: "Setup assistance and technical support included"
    }
  ];

  const packages = [
    {
      title: "Small Group",
      quantity: "1-10 Headsets",
      price: "From $15/day each",
      features: ["Perfect for small workshops", "Basic setup included", "4-hour minimum"]
    },
    {
      title: "Medium Group",
      quantity: "11-25 Headsets",
      price: "From $12/day each",
      features: ["Ideal for fitness classes", "Professional setup", "Bulk discount applied"]
    },
    {
      title: "Large Event",
      quantity: "26+ Headsets",
      price: "Custom Quote",
      features: ["Corporate events & festivals", "Full technical support", "Custom packages available"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-emerald-50 bg-opacity-95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-emerald-600">AIRMANA</div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="/headset-hire" className="text-emerald-600 font-semibold">Headset Hire</a>
            </div>

            <a href="https://passm8.com/airmana#upcoming-classes" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 sm:px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all text-sm sm:text-base">
              $15 Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-900">
          {/* Energy effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          {/* Headphone icon as background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Headphones className="w-48 h-48 sm:w-96 sm:h-96 text-white" />
          </div>
        </div>
        
        <div className="relative z-30 text-center max-w-4xl px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Headset<br />
            Hire Service
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professional wireless headsets for your events, workshops, and fitness classes. Crystal clear audio for unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105">
              Get Quote Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-900">Professional Headset Hire</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your events with our premium wireless headset rental service. Perfect for silent discos, 
              headset dance parties, fitness classes, meditation sessions, workshops, and corporate events where clear audio is essential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold mb-6 text-gray-900">Why Choose Our Headsets?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                alt="Professional Headsets"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-900">Get Your Quote</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Tell us about your event and we'll provide a custom quote within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
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

              <div className="bg-emerald-50 p-6 rounded-xl">
                <h4 className="font-bold text-emerald-800 mb-2">Quick Response Guarantee</h4>
                <p className="text-emerald-700 text-sm">
                  We respond to all headset hire inquiries within 24 hours. For urgent requests, 
                  please call us directly.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Request Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      name="eventDate"
                      placeholder="Event Date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    >
                      <option value="">Select Duration</option>
                      <option value="4-hours">4 Hours</option>
                      <option value="1-day">1 Day</option>
                      <option value="2-days">2 Days</option>
                      <option value="3-days">3 Days</option>
                      <option value="1-week">1 Week</option>
                      <option value="custom">Custom Duration</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Number of Headsets"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    >
                      <option value="">Event Type</option>
                      <option value="fitness-class">Fitness Class</option>
                      <option value="meditation">Meditation Session</option>
                      <option value="workshop">Workshop</option>
                      <option value="silent-disco">Silent Disco</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your event and any special requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all"
                >
                  Request Quote
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
            <div className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-400">Airmana</div>
            <p className="text-gray-400 mb-6">Premium Headset Hire Service</p>
            <p className="text-gray-500 text-sm">© 2025 Airmana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeadsetHire;