import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./i18n/i18n";
import { Suspense } from "react";
import PageTransition from "./components/framerMotion/PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="products/:productId" element={<PageTransition><Product /></PageTransition>} />
          <Route path="cart" element={<PageTransition><Cart /></PageTransition>} />
          <Route path="checkout" element={<PageTransition><Checkout /></PageTransition>} />
          <Route path="*" element={<PageTransition><Error /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <BrowserRouter>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={document.documentElement.dir === 'rtl'}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AnimatedRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
