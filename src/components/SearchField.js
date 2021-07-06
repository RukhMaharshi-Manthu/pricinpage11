import { useState } from "react";

export default function SearchField({ rcpArr, setRcpArr, initialRcpArr }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div class="searchField text-center">
      <label for="searchField"></label>
      <input
        type="text"
        placeholder="Search Recipe"
        style={{ backgroundColor: "#f3f3dd" }}
        id="searchField"
        name="searchField"
        onChange={(event) => {
          if (event.target.value === "") {
            setRcpArr(initialRcpArr);
            setSearchText("");
          } else {
            let filteredArr = initialRcpArr.filter((ele) => {
              return ele.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            });
            setRcpArr(filteredArr);
            if (filteredArr.length === 0) {
              setSearchText("Sorry, No recipes found with this name");
            } else {
              setSearchText("");
            }
          }
        }}
      ></input>
      <p id="searchMsg">{searchText}</p>
    </div>
  );
}
