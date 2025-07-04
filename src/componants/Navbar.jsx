const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full p-5 flex justify-between items-center bg-zinc-900/40 backdrop-blur-md rounded-2xl my-2">
      {/* // Logo  */}

      <div className="text-5xl font-bold font-[Roboto]">पोर्टफोलियो:</div>

      {/* // Menu  */}
      <div className=" links flex gap-10  ">
        {["Services", "My Work", "About Me", "Insights", "Contacts"].map(
          (item, index) => (
            <a
              key={index}
              className={`group relative text-lg font-bold font-[Roboto] hover:scale-105 transition-all duration-200${index === 4 ? " ml-30" : "" }${index ===1 ?" samarkan-text":""}`}
            >
              {item}
              <div className="h-[1px] w-[0px] rounded-2xl transition-all duration-500 bg-white group-hover:w-full"></div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
