import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import ShimmerMenu from "./components/ShimmerMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";
import Help from "./components/Help";
import Footer from "./components/Footer";
import OffersPage from "./components/OffersPage";
import LandingPage from "./components/LandingPage";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/" element={<LandingPage></LandingPage>} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route
                path="/restaurants/:resId"
                element={
                  <Suspense fallback={<ShimmerMenu />}>
                    <RestaurantMenu />
                  </Suspense>
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
