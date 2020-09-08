import React from 'react';

export default function SearchBar(props) {
  return (
    <div className={props.className}>
    <div className ="m-0" style={{position: "relative"}}>
        <input placeholder="Buscar" style={searchbar} className="w-100"></input>
        
        <svg width="1.2em" style={search} height="1.2em" viewBox="0 0 16 16" className="bi bi-search"  fill="#C4C5C5" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg>
    </div>
    </div>
  );
}

const searchbar = {
    backgroundColor: "#E9EBEA",
    padding: "0.5rem 3.5rem",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "15px"
}

const search = {
    position: "absolute",
    left: 0,
    top: "50%",
    bottom: 0,
    transform: "perspective(1px) translateY(-50%)",
    marginLeft: "15px"
}
