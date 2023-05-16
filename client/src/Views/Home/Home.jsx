import { useState } from "react";
import Countries from "../../Components/Countries/Countries";
import { useSelector } from "react-redux";
import Buttons from "../../Components/Buttons/Buttons";
import FilterAndOrderBar from "../../Components/FilterAndOrderBar/FilterAndOrderBar";
// import SearchResults from "../../Components/SearchResults/SearchResults";

const Home = (props) => {
  const COUNTRIES_PER_PAGE = 10;
  const allCountries = useSelector((state) => state.allCountries);

  const [currentCountries, setCurrentCountries] = useState([
    ...allCountries.slice(0, COUNTRIES_PER_PAGE),
  ]);

  const [currentPage, setCurrentPage] = useState(0);

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
      <FilterAndOrderBar prevHandler={prevHandler} nextHandler={nextHandler} />
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
