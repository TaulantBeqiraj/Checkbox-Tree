import React, { useState, useEffect } from "react";
import { Items } from "./components/Items";
import data from "./data";
import "./App.css";

// const url = 'https://frakton.dev/articles.php'

const App = () => {
  const [rootParents, setRootParents] = useState([]);
  const [arrayMap, setArrayMap] = useState([]);

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

  useEffect(() => {
    // convert data to hash so that we can access children easier by ID
    const hash = data.reduce((curr, prev) => {
      return {
        ...curr,
        [prev.parent]: [...(curr[prev.parent] ? curr[prev.parent] : []), prev],
      };
    }, {});

    // remove root parents since we know they have ID=0
    const { 0: root, ...other } = hash;

    setRootParents(root);
    setArrayMap(other);
  }, []);

  return <Items data={rootParents} allData={arrayMap} />;
}

export default App;
