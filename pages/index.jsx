import Head from "next/head";
import Image from "next/image";
import { Banner, Footer, Header, LargeCard, MediumCard, SmallCard } from "../components";
const Home = ({ exploreData, cardsData }) => {
  return (
    <>
      <Head>
        <title>Meti AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto sm:px-8 mb-20">
        <section className="pt-6 px-2 mb-10">
          <h2 className="text-4xl font-bold">Explore Nearby</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {exploreData.map((item, i) => (
              <SmallCard
                key={i}
                distance={item.distance}
                img={item.img}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold">Live Anywhere</h2>
          <div className="px-5 mt-5 overflow-x-auto w-full flex items-center">
            {cardsData.map((data, i) => (
              <>
              <MediumCard img={data.img} title={data.title} key={i} />
              </>
            ))}
          </div>
        </section>
        <LargeCard img={'https://links.papareact.com/4cj'}
        title='The Greatest Outdoors'
        description={'Wishlists curated by Airbnb'}
        buttonText='Get Inspired'/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
export async function getStaticProps() {
  const exploreData = await fetch(`https://links.papareact.com/pyp`).then(
    (res) => res.json()
  );
  const cardsData = await fetch(`https://links.papareact.com/zp1`).then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
