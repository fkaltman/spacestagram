import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import SpacepicGrid from "./components/spacepics/SpacepicGrid";
import axios from "axios";

const App = () => {
  // below are pieces of state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // useEffect hook, don't but async on that function, make a new function inside
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=aeMjlr62KYkmJOc3xvbe2lcdr3rFLA0KZ0yXX0oB&start_date=2000-01-01&end_date=2000-01-31`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <SpacepicGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
