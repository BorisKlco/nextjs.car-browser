interface headersProps {
  [key: string]: string;
}

const fetchCars = async () => {
  const headers: headersProps = {
    "X-RapidAPI-Key": process.env.KEY!,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  return url.json();
};

export default fetchCars;
