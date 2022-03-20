import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckboxList from "./pages/CheckboxList";
import Summary from "./pages/Summary";
import "./App.css";

// const url = 'https://frakton.dev/articles.php'

const App = () => {
  //----------------------------------------------------------
  // API-fetching functionality as a proof
  //----------------------------------------------------------
  // const fetchVictuals = async() =>{
  //   const response = await fetch(url, {mode: 'no-cors'});
  //   const fetchedVictuals = await response.json();
  //   setVictuals(fetchedVictuals);
  // }

  // useEffect(() => {
  //   fetchVictuals();
  // }, [])
  //-----------------------------------------------------------

  return (
    <main className="container">
      <div className="title">
        <h2>Checkbox Tree</h2>
        <div className="underline"></div>
      </div>
      <CheckboxList />

      <Summary />
    </main>
  );
};

export default App;
