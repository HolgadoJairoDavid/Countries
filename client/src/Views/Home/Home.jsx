import { useState } from "react";
import Countries from "../../Components/Countries/Countries";
import { useSelector } from "react-redux";
import Buttons from "../../Components/Buttons/Buttons";
import SearchResults from "../../Components/SearchResults/SearchResults";

const Home = () => {
  const COUNTRIES_PER_PAGE = 10;
  const allCountries = useSelector((state) => state.allCountries);
  const firstTenCountries = allCountries.slice(0, COUNTRIES_PER_PAGE)
  console.log(firstTenCountries);
  const [currentCountries, setCurrentCountries] = useState([...firstTenCountries]);
  const [currentPage, setCurrentPage] = useState(-1);

  console.log(currentCountries);
  console.log(currentPage);

  const nextHandler = () => {
    const totalElements = allCountries.length;

    const nextPage = currentPage + 1;

    const firstIndex = nextPage * COUNTRIES_PER_PAGE;

    if (firstIndex === totalElements) return;

    setCurrentCountries(
      allCountries.slice(firstIndex, firstIndex + COUNTRIES_PER_PAGE)
    );
    setCurrentPage(nextPage);
  };
  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;
    const firstIndex = prevPage * COUNTRIES_PER_PAGE;

    setCurrentCountries(
      allCountries.slice(firstIndex, firstIndex + COUNTRIES_PER_PAGE)
    );
    setCurrentPage(prevPage);
  };

  return (
    <div>
      <Countries allCountries={currentCountries} />
      <Buttons
        currentPage={currentPage}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      
    </div>
  );
};

export default Home;
