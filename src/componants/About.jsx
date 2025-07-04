import { DiNodejsSmall } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";
const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.225" className=" w-full py-15 mb-10 bg-[#cdea68] rounded-t-2xl ">
      <h1 className="text-[3vw] leading-[3.3vw] text-zinc-900 pl-[5vw] font-[Roboto] tracking-tight font-light">
        Oorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <span className="underline">
          Culpacupiditate in perferendis laboriosam soluta? In minima aut dolore
          aspernatur corporis?
        </span>
      </h1>
      <div className=" w-[95vw] mt-8 m-auto border-1 border-zinc-500" />

      <div className=" flex items-center justify-between w-full">
        <div className=" w-[50vw] h-70 "></div>
        <div className=" w-[50vw] h-70 ">


            <div className=" pt-20 pb-5 pr-5 lg:pr-20 text-zinc-900 font-[Roboto] tracking-tight ">
              We partner with the companies and startups who make the world go round
              — they drive the net-zero economy, revolutionize crypto treasury
              management, build photonic chips, and open Michelin-starred
              restaurants. We believe the mix of strategy and design (with a bit of
              coffee) is what makes your message clear, convincing, and captivating.
            </div>
            <div className=" flex gap-3 lg:gap-10 mt-3 lg:mt-10">

            <DiHtml5 className="hover:scale-110 duration-300 lg:scale-200 lg:hover:scale-[2.5]" size={50} />
            <DiNodejsSmall className=" hover:rotate-20 duration-300 lg:scale-200  " size={50} />
            <DiPython className=" hover:rotate-180 duration-700 lg:scale-200 "  size={50} />
            <DiReact className=" hover:animate-spin lg:scale-200 " size={50} />
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
