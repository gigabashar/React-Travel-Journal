import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Card from "./Components/Cards";
import Data from "./Data";

export default function App() {
  const newArray = Data.map((items) => {
    return <Card key={items.title} item={items} />;
  });
  return (
    <div>
      <Header />
      {newArray}
    </div>
  );
}
