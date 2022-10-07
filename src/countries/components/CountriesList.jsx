import { CountyCard } from "./CountyCard";

export const CountriesList = ({ countries, inputValue, error }) => {
  const result = !inputValue
    ? countries
    : countries.filter((single) =>
        single.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );

  return (
    <>
      {result.length === 0 && error === null && (
        <p >Make sure you have typed  the name of the country correctly 🧐 </p>
      )}

      {Array.isArray(result)
        ? result.map((country, i) => <CountyCard key={i} {...country} />)
        : ""}
    </>
  );
};
