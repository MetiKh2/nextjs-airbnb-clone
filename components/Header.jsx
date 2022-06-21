import Image from "next/image";
import { AiOutlineBars } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { GiEarthAmerica } from "react-icons/gi";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOgGuests, setNumOgGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const changeDate = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query:{
       location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numOgGuests: numOgGuests
      }
    });
  };
  return (
    <header className="shadow-md pb-1">
      <div className="flex justify-between sm:px-9 sm:pt-3 items-center">
        <Image
          onClick={() => router.push("/")}
          src={"/R (1).png"}
          width={85}
          height={85}
        />
        <div className=" lg:flex-1">
          <div className="max-w-xl m-auto relative">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="outline-none text-sm p-1 w-full border pl-2 pr-6 rounded-3xl"
              type="text"
              placeholder={placeholder||"Start your search"}
            />
            <div className="bg-red-400 p-1 absolute right-1 top-0.5 rounded-3xl">
              <BiSearchAlt color="#fff" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex border border-2 rounded-3xl p-2 mr-1 hidden sm:inline-flex">
            <div className="mr-1 flex">
              <GiEarthAmerica color="grey" />
            </div>
            <p className="text-xs opacity-80">Become a host</p>
          </div>
          <div className="flex border border-2 rounded-3xl p-2">
            <div className="mr-4">
              <AiOutlineBars color="grey" />
            </div>
            <div>
              <BsPersonCircle color="grey" />
            </div>
          </div>
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 items-center ">
          <DateRangePicker
            className="justify-center"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5861"]}
            onChange={changeDate}
          />
          <div className="w-2/3 border-b mb-4 flex justify-between">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <div className="flex ml-6">
              <AiOutlineUser className="h-5" />
              <input
                value={numOgGuests}
                onChange={(e) => setNumOgGuests(e.target.value)}
                type="number"
                className="w-12 text-lg outline-none ml-2 text-red-400"
                min={1}
              />
            </div>
          </div>
          <div className="flex justify-between w-2/3 mb-4">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
