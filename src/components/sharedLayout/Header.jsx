import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import menu from "../../assets/imgs/menu.png";
import close from "../../assets/imgs/close.png";
import myCart from "../../assets/imgs/myCart.png";
import logo from "../../assets/imgs/logo.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faShoppingCart, faHome, faShoppingBag, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
    <motion.header className="sticky top-0 w-full bg-cristaluxBrown/95 backdrop-blur-md min-h-[70px] flex items-center justify-between z-50 px-4 py-4 sm:px-7 md:px-10 shadow-lg border-b border-cristalux/20">
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
      <div className="flex items-center gap-x-4 relative">
        {/* Language Switcher */}
        <div className="hidden sm:block relative">
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
          {/* Desktop Navigation */}
          <ul className="hidden sm:flex sm:items-center sm:gap-x-6 md:gap-x-8">
            <NavLink
              to={"/"}
              className={({ isActive }) => 
                `font-accent font-medium text-cristalux hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg ${
                  isActive ? "bg-cristalux/20 font-semibold" : "hover:bg-cristalux/10"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHome} className="text-sm" />
                {t('navigation.home')}
              </div>
            </NavLink>
            <NavLink
              to={"#about"}
              className={({ isActive }) => 
                `font-accent font-medium text-cristalux hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg ${
                  isActive ? "bg-cristalux/20 font-semibold" : "hover:bg-cristalux/10"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faInfoCircle} className="text-sm" />
                {t('footer.aboutUs')}
              </div>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) => 
                `font-accent font-medium text-cristalux hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg ${
                  isActive ? "bg-cristalux/20 font-semibold" : "hover:bg-cristalux/10"
                }`
              }
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShoppingBag} className="text-sm" />
                {t('navigation.products')}
              </div>
            </NavLink>
          </ul>
          
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="sm:hidden w-10 h-10 rounded-lg bg-cristalux/20 flex items-center justify-center"
            onClick={() => setNavToggle((prev) => !prev)}
          >
            <FontAwesomeIcon 
              icon={navToggle ? faTimes : faBars} 
              className="text-cristalux text-lg" 
            />
          </motion.button>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {navToggle && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-2xl border-t border-gray-200 sm:hidden"
              >
                <div className="p-6 space-y-4">
                  <NavLink
                    to={"/"}
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => 
                      `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "bg-cristalux text-gray-800 font-semibold" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={faHome} />
                    {t('navigation.home')}
                  </NavLink>
                  
                  <NavLink
                    to={"#about"}
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => 
                      `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "bg-cristalux text-gray-800 font-semibold" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    {t('footer.aboutUs')}
                  </NavLink>
                  
                  <NavLink
                    to={"products"}
                    onClick={() => setNavToggle(false)}
                    className={({ isActive }) => 
                      `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "bg-cristalux text-gray-800 font-semibold" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={faShoppingBag} />
                    {t('navigation.products')}
                  </NavLink>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <LanguageSwitcher />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
