import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { CarProps } from "@/types";
import fetchCars from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();

  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Browse available cars in selection</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {allCars ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((item: CarProps, index: number) => (
                <CarCard key={index} car={item} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Opps, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
