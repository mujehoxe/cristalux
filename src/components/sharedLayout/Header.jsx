import { NavLink, Link } from "react-router-dom";
import menu from "../../assets/imgs/menu.png";
import close from "../../assets/imgs/close.png";
import cart from "../../assets/imgs/cart.png";
import logo from '../../assets/imgs/logo.png'
import { useState } from "react";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <header className="header w-full min-h-[40px] flex items-center justify-between z-10  px-3 py-4 sm:px-7 md:px-10 bg-red-300">
      <div className="logo">
        <Link to={"/"} className="flex items-center gap-x-3">
          <img src={logo} className="w-[40px] lg:w-[50px]" alt="logo" />
          <span className="title text-2xl lg:text-3xl font-extrabold text-cristalux">
            CRISTALUX
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-x-4 sm:flex-row-reverse">
        <div className="relative cart">
          <img src={cart} className="w-[30px] cursor-pointer" alt="cart" />
          <div className="absolute w-[27px] h-[27px] -top-[30%] -right-[50%]  flex items-center justify-center bg-cristalux border-2 border-black rounded-[50%]">
            <span className="text-black font-bold">0</span>
          </div>
        </div>
        <nav>
          <img
            src={navToggle ? close : menu}
            alt="menu"
            className="w-[30px] cursor-pointer sm:hidden"
            onClick={() => setNavToggle((prev) => !prev)}
          />
          <ul
            className={`${
              navToggle ? "max-sm:right-[0px] max-sm:duration-300" : ""
            } max-sm:absolute max-sm:top-[10%] max-sm:-right-full max-sm:text-center max-sm:w-full max-sm:min-h-[25vh] max-sm:bg-cristalux text-black max-sm:py-5 max-sm:shadow-lg max-sm:ease-out max-sm:flex max-sm:justify-center max-sm:items-center max-sm:duration-300`}
          >
            <div className="sm:flex sm:items-center sm:gap-x-3 md:gap-x-5">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  accueil
                </li>
              </NavLink>
              <NavLink
                to={"#about"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  À propos de nous
                </li>
              </NavLink>
              <NavLink
                to={"products"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  nos produits
                </li>
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
