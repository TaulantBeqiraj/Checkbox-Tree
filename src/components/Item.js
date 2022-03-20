import { Items } from "./Items";
import React, { useState } from "react";

export const Item = ({ data, allData }) => {
  const children = allData[data.id];

  const [childVisible, setChildVisiblity] = useState(false);

  const changeNode = (e) => {
    let isChecked = e.target.checked;

    if (isChecked) {
      setChildVisiblity(true);
    } else {
      setChildVisiblity(false);
    }
  };

  return (
    <div className="node-container" style={{ padding: "0 20px" }}>
      <div className="node-item">
        <input
          className="form-check-input"
          type="checkbox"
          id="name"
          name="name"
          onChange={(e) => changeNode(e)}
        />
        <label className="lbl" htmlFor="name">
          {data.name}
        </label>
      </div>

      {children && childVisible && <Items data={children} allData={allData} />}
    </div>
  );
};
