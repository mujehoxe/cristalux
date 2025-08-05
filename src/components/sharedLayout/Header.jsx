import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menu from "../../assets/imgs/menu.png";
import close from "../../assets/imgs/close.png";
import myCart from "../../assets/imgs/myCart.png";
import logo from "../../assets/imgs/logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navToggle, setNavToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  
  // Update document direction when language changes
  useEffect(() => {
    const isRTL = i18n.language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const headerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.header className="header w-full bg-cristaluxBrown min-h-[40px] flex items-center justify-between z-20  px-3 py-4 sm:px-7 md:px-10 overflow-x-hidden">
      <motion.div
        className="logo"
        initial={"hidden"}
        animate={"visible"}
        variants={headerVariants}
      >
        <Link to={"/"} className="flex items-center gap-x-3">
          <img src={logo} className="w-[40px] lg:w-[50px]" alt="logo" />
          <span className="title text-2xl lg:text-3xl font-extrabold text-cristalux">
            CRISTALUX
          </span>
        </Link>
      </motion.div>
      <div className="flex items-center gap-x-4">
        {/* Language Switcher */}
        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>
        
        <div className="relative cart">
          <Link to={"cart"} title={t('navigation.cart')}>
            <img src={myCart} className="w-[30px] cursor-pointer" alt="cart" />
          </Link>
          <div className="absolute w-[27px] h-[27px] -top-[30%] -right-[50%]  flex items-center justify-center bg-cristalux border-2 border-black rounded-[50%]">
            <span className="text-black font-bold">
              {cart.cartItems.length}
            </span>
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
              navToggle ? "max-sm:top-[10vh] max-sm:duration-300" : ""
            } max-sm:absolute max-sm:-right-0 max-sm:-top-[40vh] max-sm:text-center max-sm:w-full max-sm:min-h-[25vh] max-sm:bg-cristalux text-black max-sm:py-5 max-sm:shadow-lg max-sm:ease-out max-sm:flex max-sm:justify-center max-sm:items-center max-sm:duration-300 z-10`}
          >
            <div className="sm:flex sm:items-center sm:gap-x-3 md:gap-x-5">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  {t('navigation.home')}
                </li>
              </NavLink>
              <NavLink
                to={"#about"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  {t('footer.aboutUs')}
                </li>
              </NavLink>
              <NavLink
                to={"products"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink max-sm:text-black sm:text-cristalux">
                  {t('navigation.products')}
                </li>
              </NavLink>
              
              {/* Mobile Language Switcher */}
              <div className="sm:hidden mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
