import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=" py-3  w-full h-1/2 flex items-center bg-[#1f8db5] rounded-t-xl  overflow-hidden">
      <div className="text border-t-2 border-b-2 flex  whitespace-nowrap border-zinc-400">
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-[25vw] lg:text-[12vw]  px-[2vw] samarkan-text font-extrabold">
          We Are Original{" "}
        </motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-[25vw] lg:text-[12vw]  px-[2vw] samarkan-text font-extrabold">
          We Are Original{" "}
        </motion.h1> 
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-[25vw] lg:text-[12vw]  px-[2vw] samarkan-text font-extrabold">
          We Are Original{" "}
        </motion.h1> 

      </div>
    </div>
  );
};

export default Marquee;
