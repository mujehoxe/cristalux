import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Error from "./pages/Error"
import Details from "./components/product/Details"
import MoreDetails from "./components/product/MoreDetails"
import Preview from "./components/product/Preview"
import Cart from "./pages/Cart"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;