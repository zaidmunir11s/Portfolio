import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { useTranslation } from 'react-i18next';
import Sun from '../assets/Sun';

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const [navToggle, setNavToggle] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const [t, i18n] = useTranslation('global');

  const handleNav = () => {
    setNavToggle(!navToggle);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setThemeToggle(!themeToggle);
  };

  const handleChangeLangugage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <header className="fixed z-[5] top-24 left-0 right-0">
      <div className="relative z-50 py-0 pr-24 pl-[88px] flex justify-between items-center overflow-hidden">
        <img src="/assets/Logo.svg" alt="logo" />
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-1 border-[1px] border-[#0000] hover:border-[#4c4c5c] p-2 rounded-r-full rounded-l-full duration-500 ease-in-out group">
            <p
              className={`${
                selectedLang === 'fr'
                  ? 'border-white shadow-[inset_0px_0px_10px_0px_#4c4c5c]'
                  : 'hidden group-hover:flex'
              } dark:text-white text-[#3b3b47] text-[12px] cursor-pointer border-[1px] border-[#0000] w-7 h-7 flex items-center justify-center rounded-full`}
              onClick={() => handleChangeLangugage('fr')}
            >
              FR
            </p>
            <p
              className={`${
                selectedLang === 'tr'
                  ? 'border-white shadow-[inset_0px_0px_10px_0px_#4c4c5c]'
                  : 'hidden group-hover:flex'
              } dark:text-white text-[#3b3b47]  text-[12px] cursor-pointer border-[1px] border-[#0000] w-7 h-7 flex items-center justify-center rounded-full`}
              onClick={() => handleChangeLangugage('tr')}
            >
              TR
            </p>
            <p
              className={`${
                selectedLang === 'en'
                  ? 'border-white shadow-[inset_0px_0px_10px_0px_#4c4c5c]'
                  : 'hidden group-hover:flex'
              } dark:text-white text-[#3b3b47]  text-[12px] cursor-pointer border-[1px] border-[#0000] w-7 h-7 flex items-center justify-center rounded-full`}
              onClick={() => handleChangeLangugage('en')}
            >
              EN
            </p>
            <p
              className={`${
                selectedLang === 'ar'
                  ? 'border-white shadow-[inset_0px_0px_10px_0px_#4c4c5c]'
                  : 'hidden group-hover:flex'
              } dark:text-white text-[#3b3b47] text-[12px] cursor-pointer border-[1px] border-[#0000] w-7 h-7 flex items-center justify-center rounded-full`}
              onClick={() => handleChangeLangugage('ar')}
            >
              AR
            </p>
          </div>
          <div className="cursor-pointer" onClick={handleThemeToggle}>
            <div
              className={`${
                themeToggle ? 'hidden' : 'block sun-icon'
              } w-4 h-[30px] flex items-center`}
            >
              <Sun color="#606887" />
            </div>
            <img
              src="/assets/Moon.svg"
              alt="moon"
              className={`${themeToggle ? 'block sun-icon' : 'hidden'} w-4 h-4`}
            />
          </div>
          <div
            className="relative w-8 h-8 cursor-pointer hamburger_btn"
            onClick={handleNav}
          >
            <div className={navToggle ? 'hidden' : 'block'}>
              <span className="absolute top-0 left-0 w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9]" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9]" />
              <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9]" />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9]" />
              <div className="hover-5dots-div">
                <span className="absolute top-0 left-1/2 transform -translate-x-[50%] w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9] group-hover:border-[#f3f2f900]" />{' '}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-[50%] w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9] group-hover:border-[#f3f2f900]" />
                <span className="absolute left-0 top-1/2 -translate-y-[50%] transform  w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9] group-hover:border-[#f3f2f900]" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9] group-hover:border-[#f3f2f900]" />
                <span className="absolute top-1/2 right-0 -translate-y-[50%] w-2 h-2 rounded-full border-2 border-[#606887] dark:border-[#f3f2f9] group-hover:border-[#f3f2f900]" />
              </div>
            </div>
            <div
              className={`${
                navToggle
                  ? 'rotate-45 duration-500'
                  : 'duration-500 hover-plus-div'
              } absolute top-0 h-8 w-8 `}
            >
              <div className="border-2 border-[#606887] dark:border-[#f3f2f9] rounded-[10px] w-[9px] h-8 absolute left-1/2 transform -translate-x-[50%]" />
              <div className="border-2 border-[#606887] dark:border-[#f3f2f9] rounded-[10px] w-[9px] h-8 rotate-90 absolute left-1/2 transform -translate-x-[50%]" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`${
          navToggle ? 'flex animate-navdrop' : 'hidden'
        } flex-col items-center gap-6 overflow-hidden mr-60 mt-16 bg-[#F3F2F9] dark:bg-[#2B2B33] w-screen h-screen`}
      >
        <h5 className="text-2xl font-medium text-[#f3f2f9]">
          sharlee/charles bruyerre
        </h5>

        <div className="flex flex-col w-auto">
          <nav>
            <ol className="list-decimal text-white">
              <li>
                <div onClick={handleNav}>
                  <Link
                    to={'/'}
                    className="text-7xl uppercase font-bold text-[#f3f2f9]"
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div onClick={handleNav}>
                  <Link
                    to={'/work'}
                    className="text-7xl uppercase font-bold text-[#f3f2f9]"
                  >
                    Work
                  </Link>
                </div>
              </li>
              <li>
                <div onClick={handleNav}>
                  <Link
                    to={'/about'}
                    className="text-7xl uppercase font-bold text-[#f3f2f9]"
                  >
                    About
                  </Link>
                </div>
              </li>
              <li>
                <div onClick={handleNav}>
                  <Link
                    to={'/contact'}
                    className="text-7xl uppercase font-bold text-[#f3f2f9]"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
