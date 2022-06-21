import { useRouter } from "next/router";
import { Footer, Header, InfoCard } from "../components";
import { format } from "date-fns";
const Search = ({searchResults}) => {
  const router = useRouter();
  const { location, startDate, endDate, numOgGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "MMM do yyyy");
  const formattedEndDate = format(new Date(endDate), "MMM do yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOgGuests} quests`} />
      <div className="flex">
        <section className="flex-grow mt-14 px-6">
          <p className="text-xs">
            300+ Stays for {numOgGuests} number of guests
          </p>
          <h1 className="text-xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div
            className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800
          whitespace-nowrap"
          >
            <p className="button">Cancelation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms</p>
            <p className="button">Beds</p>
            <p className="button">More</p>
          </div>
        </section>
      </div>
       <div className="p-3">
       {searchResults.map((res,i)=>(
            <InfoCard {...res} key={i}/>
        ))}
       </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}

export default Search;
