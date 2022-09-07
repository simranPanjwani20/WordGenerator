import React from "react";

function Searchbar(props) {
  const getSearchterm = (e) => {
    props.setSearchInput(e.target.value);
    
  };

  return (
    <form className="mx-2 my-auto d-inline" style={{ width: "90%" }}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search here"
          onChange={getSearchterm}
          value={props.searchInput}
        />
        <span className="input-group-append">
          <button
            onClick={props.find}
            className="btn btn-outline-light"
            type="button"
          >
            Find
          </button>
        </span>
      </div>
    </form>
  );
}

export default Searchbar;
