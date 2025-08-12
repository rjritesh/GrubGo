import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">
           <img src={Logo}  alt="" width="150px"/>


            </h3>
            <p className="text-gray-400">
              Delivering happiness to your doorstep with delicious food from the best restaurants in your area.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/offers" className="block text-gray-400 hover:text-white transition-colors">Offers</Link>
              <Link to="/help" className="block text-gray-400 hover:text-white transition-colors">Help</Link>
            </div>
          </div>
          
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@grubgo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1800 30000 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-7 h-7" />
                <span>EC Block, Sector 1, Salt Lake City, Kolkata – 700064</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GrubGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;