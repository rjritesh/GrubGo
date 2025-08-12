import React from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Simply browse restaurants, select items, add to cart, and proceed to checkout.'
    },
    {
      question: 'What are the delivery charges?',
      answer: 'Delivery charges vary by location and order value. Free delivery on orders above ₹199.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 20-45 minutes depending on your location and restaurant preparation time.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be cancelled within 1 minute of placing. After that, please contact our support team.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-gray-600">
            Get quick answers to frequently asked questions or contact our support team
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Available 24/7</p>
            <p className="font-semibold text-orange-600">1800 30000 123</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
            <p className="font-semibold text-orange-600">support@grubgo.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <MessageCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Instant support</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
              Start Chat
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="w-6 h-6 mr-2 text-orange-600" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
          <div className="flex items-center mb-4">
            <Clock className="w-6 h-6 text-orange-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Support Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 10:00 PM</p>
              <p><strong>Saturday - Sunday:</strong> 9:00 AM - 9:00 PM</p>
            </div>
            <div>
              <p><strong>Phone Support:</strong> 24/7</p>
              <p><strong>Email Support:</strong> 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;