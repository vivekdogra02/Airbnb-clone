import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/Map";

function Search({ searchResult }: any) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query as any;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}  - ${formattedEndDate}`;
  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests.
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button  active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
            <p className="button  active:scale-95 active:bg-gray-100">
              Type of Places
            </p>
            <p className="button  active:scale-95 active:bg-gray-100">Price</p>
            <p className="button  active:scale-95 active:bg-gray-100">
              Rooms and Beds
            </p>
            <p className="button  active:scale-95 active:bg-gray-100">
              More Filters
            </p>
          </div>

          <div className="flex flex-col">
            {searchResult?.map((item: any) => (
              <InfoCard key={item?.img} item={item} />
            ))}
          </div>
        </section>

        <section className="hidden md:inline-flex xl:min-w-[500px] sticky top-[76px] h-[calc(100vh-76px)]">
          <MapBox searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  console.log(searchResult);
  return {
    props: {
      searchResult,
    },
  };
}
