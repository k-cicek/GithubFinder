import React, { useState } from "react";

const Search = ({ searchUsers,setAlert,showClearButton,clearUsers }) => {
  const [keyword, setKeyword] = useState(" ");
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (keyword === "") {
      setAlert("Lütfen bir anahtar kelime giriniz", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            value={keyword}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-dark">
              Search
            </button>
          </div>
        </div>
      </form>
      {showClearButton && (
        <button
          onClick={clearUsers}
          className="btn btn-secondary btn-sm btn-block mt-2"
        >
          Clear Results
        </button>
      )}
    </div>
  );
};

export default Search;
