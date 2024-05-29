import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full bg-[#000004] animate-pulse"
            style={{ boxShadow: '0 0 15px #000004' }}
          />
          <div
            className="w-1 sm:h-80 h-40"
            style={{
              background: 'linear-gradient(to bottom, #000000, #4a4a4a)',
              animation: 'rotateGradient 5s infinite',
            }}
          />
        </div>

        <div>
          <h1
            className={`${styles.herosubText} text-black`}
            style={{
              transition: 'transform 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1) rotateY(10deg)';
              e.target.style.color = '#915EFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotateY(0deg)';
              e.target.style.color = 'black';
            }}
          >
            <h1 className={`${styles.heroHeadText} text-black`}>
    Hi, I'm Alexander <span className='text-[#915EFF]'>(AJ)</span>
  </h1>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2`}
            style={{ color: 'black', transition: 'color 0.3s ease' }}
          >
            I develop full stack <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;