
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url('/banner.webp')`, height: "40rem" }}
      className="w-ful bg-cover bg-center bg-no-repeat flex justify-center items-center flex-1"
    >
      <div className="flex flex-col items-center">
        <p className="font-bold bg-white p-3 rounded-full">
          Not sure where to go? Prefect
        </p>
        <button
          className="bg-white mt-3 outline-none
         border-none w-40 font-semibold 
         active:scale-90 duration-150
         py-2 rounded-full hover:shadow-xl shadow-md text-purple-600"
        >
          I`m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
