import { Link } from 'react-router-dom';
import Arrow from '../assets/Arrow';
import JsonData from '../../config.json';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation('global');

  console.log(t('homepage_title_mid'));

  return (
    // <div className="flex flex-col justify-center items-center h-screen">
    //   <h3 className="text-[#aab2d1] font-extrabold tracking-[0.05rem] text-[2.5rem] flex gap-2 -mb-5 uppercase">
    //     {t('homepage_title').split('***')[0]}
    //   </h3>
    //   <h3 className="text-[#aab2d1] font-extrabold tracking-[0.05rem] text-[2.5rem] flex gap-2 uppercase">
    //     {JsonData.homepage_title.split('***')[1]}
    //   </h3>
    //   <div className="text-xl font-medium text-white"></div>
    //   <h5 className="dark:text-white text-[#606887] uppercase">
    //     {JsonData.homepage_sub_heading.split('***')[0]}
    //   </h5>
    //   <h5 className="dark:text-white text-[#606887] uppercase">
    //     {JsonData.homepage_sub_heading.split('***')[1]}
    //   </h5>
    //   <div className="dark:text-white text-[#606887] flex gap-4 mt-4">
    //     <Link
    //       to={'#'}
    //       className="flex items-center justify-center gap-1 text-xl hover:underline ease-in-out duration-300"
    //     >
    //       <Arrow color="#fff" />
    //       see my projects
    //     </Link>
    //     <Link
    //       to={'#'}
    //       className="flex items-center justify-center gap-1 text-xl hover:underline ease-in-out duration-300"
    //     >
    //       <Arrow color="#fff" />
    //       see my projects
    //     </Link>
    //   </div>
    // </div>
    <>
      <section className="container mx-auto h-screen flex flex-col items-center md:items-start lg:flex-row gap-10 justify-center py-[40rem] md:py-64">
        <div className="w-1/2 flex flex-col gap-8">
          <h5 className="text-green-500 text-xl border-[1px] border-green-500 oval-shape w-fit">
            Welcome
          </h5>
          <h1 className="font-bold text-center md:text-start text-3xl md:4xl lg:text-6xl text-black dark:text-white">
            {t('homepage_title_start')}{' '}
            <span className="text-green-500 mr-4">
              <Typewriter
                words={t('homepage_title_mid')}
                loop={5}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            {t('homepage_title_end')}
          </h1>
          <p className="text-gray-500 dark:text-white text-lg text-center md:text-start">
            {t('homepage_info')}
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 mb-10 md:mb-0">
            <button className="bg-green-500 hover:bg-green-600 text-base text-white px-5 py-4 rounded-lg">
              Contact Me
            </button>
            <Link className="text-gray-900 dark:text-white text-lg hover:underline duration-500 ease-in">
              View Profile
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex gap-24 z-[2]">
          <div className="w-2/3 rounded-lg h-96 hero-image"></div>
          <div className="flex flex-col gap-4 items-end">
            <p className="text-green-500 rotate-90">Follow me on</p>
            <p className="bg-green-500 h-20 w-1 rounded-lg mt-10 mr-[14px]"></p>
            <div className="flex flex-col gap-2">
              <FaLinkedin className="text-green-500 text-3xl" />
              <FaFacebookSquare className="text-green-500 text-3xl" />
              <FaFacebookSquare className="text-green-500 text-3xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center md:items-start md:flex-row justify-center py-64 gap-10 md:gap-0 text-center md:text-start">
        <div className="md:border-r-[1px] border-green-300 md:pr-16">
          <h1 className="text-green-500 text-3xl font-semibold">81+</h1>
          <p className="text-gray-900 dark:text-white">Satisfied Clients</p>
        </div>
        <div className="md:border-r-[1px] border-green-300 md:px-16">
          <h1 className="text-green-500 text-3xl font-semibold">200+</h1>
          <p className="text-gray-900 dark:text-white">Project Completed</p>
        </div>
        <div className="md:px-16">
          <h1 className="text-green-500 text-3xl font-semibold">99+</h1>
          <p className="text-gray-900 dark:text-white">Reviews given</p>
        </div>
      </section>
    </>
  );
};

export default Home;
