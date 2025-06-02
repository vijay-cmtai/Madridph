
import React from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-green-700 to-green-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, partnerships, or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-10 shadow-2xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
                    Send us a Message
                  </h2>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Product Information</option>
                      <option>Partnership Opportunity</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-8">
                Get in Touch
              </h2>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "406, C- Wing Ajanta Gardens,\nMittal Enclave, Vasai East\nThane Maharashtra - 401208",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+91 7564852518",
                    color: "from-green-500 to-green-600",
                    bgColor: "from-green-50 to-green-100"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@luxempharma.in",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "from-purple-50 to-purple-100"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
                    color: "from-orange-500 to-red-500",
                    bgColor: "from-orange-50 to-red-100"
                  }
                ].map((contact, index) => (
                  <div key={index} className={`relative p-6 rounded-2xl bg-gradient-to-br ${contact.bgColor} border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 group`}>
                    <div className="flex items-start">
                      <div className={`bg-gradient-to-r ${contact.color} rounded-full w-14 h-14 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.title}</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {contact.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Find Us</h3>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
