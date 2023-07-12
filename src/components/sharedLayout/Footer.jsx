import logo from '../../assets/imgs/logo.png'
import { Link, NavLink } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import instagram from '../../assets/imgs/instagram.png'
import phone from '../../assets/imgs/phone.png'
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="w-full min-h-[100px] bg-[#2B2B2B]">
      <div className="relative w-[90%] md:w-[95%] mx-auto md:grid md:grid-cols-4 items-center py-5 md:py-2">
        <div className="logo md:py-10">
          <Link to={"/"} className="flex items-center gap-x-3  md:w-[70%]">
            <img
              src={logo}
              className="w-[40px] lg:w-[50px] md:py-5"
              alt="logo"
            />
            <span className="text-2xl lg:text-3xl font-extrabold text-cristalux">
              CRISTALUX
            </span>
          </Link>
          <p className="w-full py-5 md:py-0 md:pb-3 px-5 text-cristalux text-lg md:text-sm  md:my-3 md:w-[220px]">
            Cristalux - L{"'"}élégance du cristal pour votre intérieur. Qualité
            et service supérieurs.
          </p>
        </div>
        <div className="flex items-end justify-center flex-row-reverse sm:hidden">
          <div className="px-10 md:px-16">
            <ul className="list-disc text-cristalux">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink my-9 sm:my-5 md:my-6 md:text-md  w-[100px]">
                  accueil
                </li>
              </NavLink>
              <NavLink
                to={"#about"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink my-9 sm:my-5 md:my-6 md:text-md  w-[140px]">
                  À propos de nous
                </li>
              </NavLink>
              <NavLink
                to={"products"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}
              >
                <li className="menuLink my-9 sm:my-5 md:my-6 md:text-md  w-[100px]">
                  nos produits
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="socials py-2 px-5 w-full">
            <h2 className="md:hidden text-lg text-cristalux uppercase">
              Contactez-nous
            </h2>
            <div className="py-2 md:px-5">
              <Socials
                link={"https://www.facebook.com/profile.php?id=100068769864798"}
                image={facebook}
                title={"Cristalux"}
              />
              <Socials
                link={"https://www.instagram.com/cristalux_deco/"}
                image={instagram}
                title={"cristalux_deco"}
              />
              <Socials link={"#"} image={phone} title={"0550 74 22 00"} />
              <Socials link={"#"} image={phone} title={"0550 74 22 00"} />
            </div>
          </div>
        </div>
        <div className="px-10 md:px-16 max-sm:hidden">
          <ul className="list-disc text-cristalux">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <li className="menuLink my-6 sm:my-5 md:my-6 md:text-md  w-[100px]">
                accueil
              </li>
            </NavLink>
            <NavLink
              to={"#about"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <li className="menuLink my-6 sm:my-5 md:my-6 md:text-md  w-[140px]">
                À propos de nous
              </li>
            </NavLink>
            <NavLink
              to={"products"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              <li className="menuLink my-6 sm:my-5 md:my-6 md:text-md  w-[100px]">
                nos produits
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="socials py-2 px-5 w-full max-sm:hidden">
          <h2 className="md:hidden text-lg text-cristalux uppercase">
            Contactez-nous
          </h2>
          <div className="py-2 md:px-5">
            <Socials
              link={"https://www.facebook.com/profile.php?id=100068769864798"}
              image={facebook}
              title={"Cristalux"}
            />
            <Socials
              link={"https://www.instagram.com/cristalux_deco/"}
              image={instagram}
              title={"cristalux_deco"}
            />
            <Socials link={"#"} image={phone} title={"0550 74 22 00"} />
            <Socials link={"#"} image={phone} title={"0550 74 22 00"} />
          </div>
        </div>
        <div className="rounded-md mx-auto h-[230px] md:h-[150px] lg:h-[200px] my-5">
          <iframe
            className="w-full rounded-md h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.7608239307965!2d2.7567368605366993!3d36.269585247316975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f6ade0b51c675%3A0xaf8ae9f007d55db9!2zQmV6aXdlY2gsIE3DqWTDqWE!5e0!3m2!1sen!2sdz!4v1682008394708!5m2!1sen!2sdz"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="copyright py-1">
        <h4 className="text-center text-cristalux text-lg">
          Copyright ©2023 <span className="font-bold">ONECLICK</span>. All
          Rights Reserved
        </h4>
      </div>
    </footer>
  );}

export default Footer