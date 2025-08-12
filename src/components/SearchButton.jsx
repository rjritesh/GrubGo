import { useState } from "react";


const SearchButton = ({ listOfRestaurent, setFilteredRestaurent }) => {

  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
      <input
        type="text"
        placeholder="Search Foods and Restaurants"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none"
      />
      <button
        onClick={() => {
          const filteredRes = listOfRestaurent.filter((res) =>
            res?.info?.name
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            res?.info?.cuisines
              .join(", ")
              ?.toLowerCase()
              .includes(searchText.toLowerCase())
          );
          setFilteredRestaurent(filteredRes);
        }}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition cursor-pointer w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  )
}

export default SearchButton