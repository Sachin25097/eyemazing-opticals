import React from 'react';
import { Eye, Clock, MapPin, Phone, Mail, Star, Award, Users, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Eyemazing Opticals</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Vision, <span className="text-blue-600">Our Passion</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Eyemazing Opticals, we're dedicated to providing exceptional eye care services 
                and premium eyewear solutions. Experience the difference with our personalized approach 
                to your vision needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all">
                  Schedule Eye Exam
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern optical store interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-amber-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Expert Care</p>
                    <p className="text-gray-600 text-sm">Professional Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive eye care and eyewear solutions tailored to your unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Eye Exams</h4>
              <p className="text-gray-600 mb-6">
                Comprehensive eye examinations using advanced diagnostic equipment for optimal eye health.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Complete vision assessment</li>
                <li>• Eye health evaluation</li>
                <li>• Prescription updates</li>
                <li>• Early detection screening</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Designer Frames</h4>
              <p className="text-gray-600 mb-6">
                Curated selection of designer and fashion-forward frames to complement your personal style.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Premium designer brands</li>
                <li>• Fashion-forward styles</li>
                <li>• Budget-friendly options</li>
                <li>• Children's eyewear</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Specialized Lenses</h4>
              <p className="text-gray-600 mb-6">
                High-quality lenses with advanced coatings and technologies for superior vision clarity.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Progressive lenses</li>
                <li>• Blue light protection</li>
                <li>• Anti-reflective coating</li>
                <li>• Photochromic lenses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About Eyemazing Opticals</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Eyemazing Opticals, we believe that everyone deserves clear, comfortable vision. 
                Our experienced team is committed to providing personalized eye care services and 
                helping you find the perfect eyewear solution that fits your lifestyle and budget.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From comprehensive eye exams to the latest in lens technology and fashionable frames, 
                we're here to ensure your vision is at its best. Experience the Eyemazing difference 
                with our friendly, professional service.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5752241/pexels-photo-5752241.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Optometrist conducting eye exam"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-amber-500 fill-current" />
                  <Star className="h-6 w-6 text-amber-500 fill-current" />
                  <Star className="h-6 w-6 text-amber-500 fill-current" />
                  <Star className="h-6 w-6 text-amber-500 fill-current" />
                  <Star className="h-6 w-6 text-amber-500 fill-current" />
                </div>
                <p className="text-sm text-gray-600 mt-1">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eye Care Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Eye Care Tips</h3>
            <p className="text-xl text-gray-600">Simple ways to maintain healthy vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Eye className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">20-20-20 Rule</h4>
              <p className="text-gray-600">Every 20 minutes, look at something 20 feet away for 20 seconds</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Heart className="h-10 w-10 text-teal-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">UV Protection</h4>
              <p className="text-gray-600">Always wear sunglasses with 100% UV protection outdoors</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Users className="h-10 w-10 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Regular Exams</h4>
              <p className="text-gray-600">Schedule comprehensive eye exams annually for optimal health</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Award className="h-10 w-10 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Healthy Diet</h4>
              <p className="text-gray-600">Eat foods rich in omega-3s, vitamins C & E, and zinc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Store</h3>
            <p className="text-xl text-gray-600">We're here to help with all your vision needs</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 text-lg">
                    B4/66A, B-4 Block, <br />
                    Near Keshav Puram Metro Station,<br />
                     Delhi, 110035
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Store Hours</h4>
                  <div className="text-gray-600 text-lg space-y-1">
                    <p>Everyday: 10:00 AM - 10:00 PM</p>                          
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact Info</h4>
                  <div className="text-gray-600 text-lg space-y-1">
                    <p>Phone: +91 8859735107</p>
                    <p>Email: eyemazingopticals@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Schedule an Appointment</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Priya"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Gupta"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="priya@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Comprehensive Eye Exam</option>
                    <option>Frame Selection</option>
                    <option>Contact Lens Fitting</option>
                    <option>Follow-up Appointment</option>
                  </select>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="h-8 w-8 text-blue-400" />
                <h5 className="text-2xl font-bold">Eyemazing Opticals</h5>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for exceptional eye care and quality eyewear solutions.
              </p>
              <div className="flex space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <Mail className="h-6 w-6 text-blue-400" />
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Eye Examinations</li>
                <li>Designer Frames</li>
                <li>Prescription Lenses</li>
                <li>Frame Adjustments</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eyemazing Opticals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;