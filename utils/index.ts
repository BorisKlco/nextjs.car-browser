import { CarProps, FilterProps } from "@/types";

interface headersProps {
  [key: string]: string;
}

const fetchCars = async (filter: FilterProps) => {
  const headers: headersProps = {
    "X-RapidAPI-Key": process.env.KEY!,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filter.manufacturer}&model=${filter.model}`,
    {
      headers: headers,
    }
  );

  return url.json();
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "copyright-imaginstudio");
  url.searchParams.append("width", "384");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export default fetchCars;
