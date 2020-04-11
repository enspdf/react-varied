import React, { useState } from "react";
import Axios from "axios";
import uuid from "uuid/v4";
import "./App.css";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "e9603bbe";
  const APP_KEY = "e1e9d7439854d917b8067567779b0500";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);

      if (!result.data.more) {
        return setAlert("No food with such name");
      }

      setRecipes(result.data.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuid()} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default App;
