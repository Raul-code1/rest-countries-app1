import { Message } from "../../ui/Components/Message";
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
        <Message />
      )}

      {Array.isArray(result)
        ? result.map((country, i) => <CountyCard key={i} {...country} />)
        : ""}
    </>
  );
};
