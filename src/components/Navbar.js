import React, { useState } from "react";
import Searchbar from "./Searchbar";
let parsedData;
let li;
function Navbar() {
  const [listItems, setlistItems] = useState('');
  const [searchInput, setSearchInput] = useState("");

  const find = (e) => {
    // setSearchInput(e.target.value)
    // if(e.target.value.length>0){
      let ul = document.getElementById("ul");
      let li = ul.getElementsByTagName("li");
      for (var i = 0; i < li.length; i++) {
        let text = li[i].textContent;
        if (text.indexOf(searchInput) > -1) {
          li[i].style.display = "";
        } 
        else {
          li[i].style.display = "none";
        }
      }
    
    
  };

  const createlist = () => {
     let ul = document.getElementById("ul");
    let node = document.createElement("li");
    let text = document.createTextNode(parsedData + []);
    node.appendChild(text);
    ul.appendChild(node);
  };
   
  const addItem = async () => {
    const url = "https://random-words-api.herokuapp.com/w?n=1";
    let data = await fetch(url);
    parsedData = await data.json();

    await setlistItems({
      listItems: parsedData,
    });
    createlist();
  };

  return (
    <div>
      <nav
        className="navbar navbar-info bg-info"
        style={{ justifyContent: "space-evenly" }}
      >
        <Searchbar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          find={find}
          list={li}
        />
        <button
          onClick={addItem}
          type="button"
          className="btn btn-outline-light"
        >
          +
        </button>
      </nav>
      <h2 className="mt-4">Your items will display here:</h2>
      <div className="row my-4">
        <ul
          id="ul"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "20px",
            marginLeft: "28px",
          }}
        ></ul>
      </div>
    </div>
  );
}

export default Navbar;
