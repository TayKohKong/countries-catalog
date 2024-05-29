import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";
import { useState, useCallback } from "react";
import { useGetCountries } from "./hooks/useCountry";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import SortInput from "./components/SortInput";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [sort, setSort] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [clickedItem, setClickedItem] = useState({});
  const { fetchedData: countries, loading, error } = useGetCountries();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(25);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords;
  let nPages;

  if (countries && !loading) {
    const filtredByName = countries.filter(function (country) {
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    });
    currentRecords = filtredByName.slice(indexOfFirstRecord, indexOfLastRecord);

    nPages = Math.ceil(filtredByName.length / recordsPerPage);

    if (sort === "ASC") {
      currentRecords = currentRecords.slice().sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (sort === "DESC") {
      currentRecords = currentRecords.slice().sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
    }
  }

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSort = (e) => {
    setSort(e.target.value);
  };

  const handleItemClick = (country) => {
    setOpenModal(true);
    setClickedItem(country);
  };

  const nextPage = useCallback(() => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage]);

  const prevPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const spinner = loading ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Loading />
    </div>
  ) : (
    ""
  );

  return (
    <div>
      {error && <div>{error}</div>}
      {spinner}
      {countries && !loading && (
        <div className="py-14">
          <h3 className="text-2xl text-bold text-center mb-4">
            Countries over the world
          </h3>
          <div className="flex flex-row justify-center items-center space-x-8">
            <SearchBox
              searchField={searchField}
              searchChange={onSearchChange}
            />
            <SortInput onSort={onSort} />
          </div>
          <CardList countries={currentRecords} onItemClick={handleItemClick} />
          <CountryDetail
            country={clickedItem}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            nPages={nPages}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default App;
