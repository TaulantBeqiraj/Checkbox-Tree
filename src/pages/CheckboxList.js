import React, { useState, useEffect } from "react";
import { Items } from "../components/Items";
import data from "../data";

const CheckboxList = () => {
  const [rootParents, setRootParents] = useState([]);
  const [arrayMap, setArrayMap] = useState([]);

  useEffect(() => {
    // convert data to hash so that we can access children easier by ID
    const hash = data.reduce((curr, prev) => {
      return {
        ...curr,
        [prev.parent]: [...(curr[prev.parent] ? curr[prev.parent] : []), prev],
      };
    }, {});

    console.log("h", hash);

    // remove root parents since we know they have ID=0
    const { 0: root, ...other } = hash;

    setRootParents(root);
    setArrayMap(other);
  }, []);

  return (
    <section className="tree-container">
      <Items
        data={rootParents}
        allData={arrayMap}
      />
    </section>
  );
};

export default CheckboxList;
