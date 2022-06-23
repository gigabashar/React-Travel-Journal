import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";

export default function Header() {
  return (
    <header>
      <GiEarthAfricaEurope className="earth" />
      <h1>my travel journal.</h1>
    </header>
  );
}
