const Footer = () => {
  return (
    <div 
     className="flex w-full h-2/3">
      <div className="w-1/2 relative  flex flex-col justify-between">
        <h1 className="font-[Roboto] font-extrabold mt-5 text-8xl tracking-tighter ml-5">Eye Opening</h1>
     
        <button className=" absolute font-extrabold font-[Roboto] ml-5 translate-y-120 border-[1px] p-2 rounded-4xl hover:bg-amber-50 hover:text-black duration-700  ">Click me -</button>
      </div>
      <div className="w-1/2 h-full">
        <h1 className="font-[Roboto] font-extrabold mt-5 text-6xl tracking-tighter ml-5">Presaintation</h1>
      </div>
    </div>
  );
};

export default Footer;
