import myimg from "../assets/ChatGPT Image Jul 3, 2025, 08_03_38 PM-photoaidcom-greyscale.png"
import myimg2 from "../assets/WhatsApp Image 2025-07-04 at 15.06.12_ca17f355.jpg"
import myimg3 from "../assets/Smiling by the Lily Pond.png"
const Cards = () => {
  return (
    <div className="  flex items-center justify-center gap-5 w-full h-[45vw] bg-[#f7f7f7] rounded-2xl overflow-hidden">
      <div className=" w-1/2 h-3/5 mx-5">
        <div className=" w-full h-full mx-5  rounded-2xl">
          <div className="flex items-center justify-center w-full h-full mx-5 bg-[#35f7b3c7] rounded-2xl hover:scale-90 duration-200 overflow-hidden group">
            <h1 className="font-[Roboto] text-black font-extrabold text-4xl group-hover:text-5xl duration-300">
              <img className="group-hover:scale-125 duration-500" src={myimg} alt="" />
            </h1>
          </div>
        </div> 
      </div>
      <div className=" flex items-center justify-center w-1/2 h-3/5 mx-5 ">
        <div className="flex items-center justify-center w-full h-full mx-5 bg-[#28c38dc7] rounded-2xl hover:scale-90 duration-200 overflow-hidden group">
          <h1 className="font-[Roboto] text-black font-extrabold text-4xl group-hover:text-5xl duration-300">
            <img className="group-hover:scale-125 duration-500" src={myimg3} alt="" />
          </h1>
        </div>
        <div className="flex items-center justify-center w-full h-full mx-5 bg-[#135d43c7] rounded-2xl hover:scale-90 duration-200 overflow-hidden group">
          <h1 className="font-[Roboto] text-black font-extrabold text-4xl group-hover:text-5xl duration-300">
            <img className="group-hover:scale-125 duration-500" src={myimg2} alt="" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
