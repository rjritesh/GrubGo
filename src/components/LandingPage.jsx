import { Link } from "react-router-dom";
import Hero from "../assets/heroimg.png"

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between py-20">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Delicious Food, <span className="text-orange-500">Delivered Fast</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Order from your favourite restaurants and get fresh food delivered straight to your door.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link to="/home"><button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md font-medium transition cursor-pointer">
              Order Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={Hero}
            alt="Food delivery"
            className="w-full max-w-lg mx-auto drop-shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-orange-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-orange-600">Fast Delivery</h3>
              <p className="mt-4 text-gray-600">Get your order in under 30 minutes, guaranteed fresh.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-orange-600">Top Restaurants</h3>
              <p className="mt-4 text-gray-600">Partnered with the best eateries around you.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-orange-600">Easy Payment</h3>
              <p className="mt-4 text-gray-600">Multiple payment options for a smooth checkout.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
