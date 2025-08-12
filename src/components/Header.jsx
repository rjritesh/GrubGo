import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Home, Gift, HelpCircle, User } from 'lucide-react';
import Logo from "../assets/logo.png"

const Header = () => {
  const navigate = useNavigate();

    const cartItems = useSelector((store) => store.cart.items)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
            <img src={Logo} width="120px" alt="" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/offers" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors">
              <Gift size={18} />
              <span>Offers</span>
            </Link>
            <Link to="/help" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors">
              <HelpCircle size={18} />
              <span>Help</span>
            </Link>
            <button 
              onClick={() => navigate('/cartPage')}
              className="relative flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          
          <div className="hidden md:block">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <User size={18} />
              <span>Login</span>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;