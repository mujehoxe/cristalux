import { Outlet } from "react-router-dom"
import Header from "../components/sharedLayout/Header"
import Footer from "../components/sharedLayout/Footer"
const SharedLayout = () => {
  return (
      <main className="overflow-x-hidden">
        <Header />
        <div className="min-h-[100vh]">
          <Outlet />
        </div>
        <Footer />
      </main>
  );
}

export default SharedLayout