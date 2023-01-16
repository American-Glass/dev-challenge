import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchBar(props) {
  return (
    <>
      <div
        className="input-group d-flex mb-3 seach-bar"
        style={{ width: "50%", }}
      >
        <input
          type="text"
          className="form-control flex-fill"
          placeholder="Busque por nome ou por ID..."
          aria-describedby="basic-addon1"
          // value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
        />
        <span className="input-group-text material-icons-outlined">search</span>
      </div>
    </>
  );
}
