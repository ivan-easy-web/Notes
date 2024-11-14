import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


const SearchField = (props) => {
  const [text, setText] = useState("");

  return (
    <div className="search-field">
    <IoIosSearch  className="search-icon" size="1.3em" />
      <input
        type="text"
        value={text}
        placeholder="type to search..."
        onChange={(e) => {
          setText(e.target.value);
          props.searchEntered(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchField