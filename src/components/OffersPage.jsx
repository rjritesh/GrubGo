import React from 'react';
import { Gift, Clock, Star } from 'lucide-react';

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: '50% OFF',
      description: 'On your first order above ₹299',
      code: 'WELCOME50',
      validTill: '31st Dec 2024',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'No delivery charges on orders above ₹199',
      code: 'FREEDEL',
      validTill: '31st Dec 2024',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: '₹100 OFF',
      description: 'On orders above ₹500',
      code: 'SAVE100',
      validTill: '31st Dec 2024',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Special Offers & Deals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save more on your favorite food with our exclusive offers and deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full font-semibold">
                  <Gift className="w-4 h-4 inline mr-1" />
                  {offer.title}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{offer.description}</h3>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Promo Code:</span>
                    <span className="font-mono font-semibold text-orange-600">{offer.code}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Valid till {offer.validTill}</span>
                </div>
                
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Use This Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;