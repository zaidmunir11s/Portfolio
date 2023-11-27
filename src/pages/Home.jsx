import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ProjectStats from '../components/ProjectStats';

const Home = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <>
      <section className="container mx-auto h-screen flex flex-col items-center lg:flex-row gap-10 justify-center py-[44rem] md:py-80 px-14">
        <div className="w-full md:w-[60%] flex flex-col gap-8 md:mt-80 lg:mt-0 items-center md:items-start">
          <h5 className="text-green-500 text-xl border-[1px] border-green-500 oval-shape w-fit">
            {t('homepage_oval_title')}
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
        <div className="w-full md:w-[40%] flex gap-24 justify-between z-[2]">
          <div className="w-2/3 rounded-lg h-96 hero-image"></div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col items-center gap-4">
              <p className="text-green-500 rotate-90 w-fit">Follow</p>
              <p className="text-green-500 rotate-90 w-fit mt-[10px]">me</p>
              <p className="text-green-500 rotate-90 w-fit">on</p>
            </div>
            <p className="bg-green-500 h-20 w-1 rounded-lg my-4"></p>
            <div className="flex flex-col gap-2">
              <FaLinkedin className="text-green-500 text-3xl" />
              <FaFacebookSquare className="text-green-500 text-3xl" />
              <FaFacebookSquare className="text-green-500 text-3xl" />
            </div>
          </div>
        </div>
      </section>
      <ProjectStats />
    </>
  );
};

export default Home;
