import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import Error from "./pages/Error"


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App;