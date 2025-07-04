import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GiAlienSkull } from "react-icons/gi";
import { GiAmericanShield } from "react-icons/gi";
import myimg from "../assets/ChatGPT Image Jul 3, 2025, 08_03_38 PM-photoaidcom-greyscale.png"
import { motion } from "framer-motion";
const Landing = () => {
  
  const [size, setSize] = useState(800);

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prev) => (prev === 800 ? 50 : 800));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.9"  className="w-full h-[85vh] bg-zinc-900 pt-1">
      {/* top section */}
      <div className="flex justify-between items-center">
          <div className="text mt-39 px-20">
          {["I Create", "Eye Opening", "Amazing Websites", "Like"].map(
            (text, index) => (
              <div
                key={index}
                className=" masker flex font-[Roboto] text-8xl leading-none tracking-tight font-bold"
              >
                {index === 1 && (
                  <motion.div
                  initial={{width:0}}
                  animate={{width:"140px"}}
                  transition={{duration:1,ease:[0.6, 0, 0.24, 0.9]}}
                   className=" flex h-20 items-center w-[140px] bg-white text-zinc-900 mr-2 mt-1 rounded-2xl overflow-hidden ">
                    <GiAmericanShield
                      size={size}
                      className="text-zinc-900 text-4xl animate-spin duration-[5000ms] "
                    />
                    <GiAlienSkull
                      size={100}
                      className="text-zinc-900 text-6xl "
                    />
                  </motion.div>
                )}
                {text}
                {index === 3 && (
                  <div className="samarkan-text"> &nbsp;&nbsp;this </div>
                )}
              </div>
            )
          )}
          </div>

          <div className=" hidden lg:block w-100 h-120 mr-50 mt-30 overflow-hidden  hover:w-80   duration-300 rounded-xl ">
          <motion.img
            initial={{width:0 ,height:"100%"}}
            animate={{width:"100%"}}
            transition={{duration:.1,ease:[0.6, 0, 0.24, 0.9]}}
          className=" hover:scale-90 rounded-2xl duration-300 object-contain"  src={myimg} alt="" />

          </div>
        
      </div>

      {/* line */}
      <div className="border-t-[1px] w-[95vw] m-auto mt-30 border-zinc-500"></div>

      {/* bottom section */}
      <div className=" flex w-[95vw] m-auto justify-between  my-3">
        {["For companies", "For individuals", "let's Start"].map(
          (item, index) => {
            if (index === 2) {
              return (
                <div
                  key={index}
                  className=" group font-[Poppins] border-[1px] flex border-zinc-500 px-5 text-zinc-400 rounded-full hover:bg-white hover:text-zinc-900 transition-all duration-500 hover:scale-105"
                >
                  {item}
                  <span className="rotate-[45deg] group-hover:rotate-[90deg] duration-500">
                    <GoArrowRight size={20} />
                  </span>
                </div>
              );
            } else {
              return (
                <div className="font-[Poppins] text-zinc-400 " key={index}>
                  {item}
                </div>
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default Landing;
