import React, { useEffect, useState } from "react";

export default function Header({ changeCountry }) {
  const [country, setCountry] = useState("in");

  const handleChange = (e) => {
    setCountry(e.target.value)
    changeCountry(e.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NewsBits
        </a>
        <div className="d-flex">
          <select
            className="form-select h-100"
            aria-label="Default select example"
            defaultValue={country}
            onChange={handleChange}
          >
            <option value="au">Austria</option>
            <option value="au">Australia</option>
            <option value="be">Belgium</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="id">Indonesia</option>
            <option value="in">India</option>
            <option value="jp">Japan</option>
            <option value="my">Malaysia</option>
            <option value="nz">New Zealand</option>
            <option value="pl">Poland</option>
            <option value="ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="se">Sweden</option>
            <option value="th">Thailand</option>
            <option value="ae">UAE</option>
            <option value="gb">UK</option>
            <option value="us">USA</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
