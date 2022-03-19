import { Items } from "./Items";
import React from "react";

export const Item = ({ data, allData }) => {
  const children = allData[data.id];

  return (
    <div className="node-container" style={{ padding: "0 20px" }}>
      <div className="node-item">
        <input
          type="checkbox"
          id="name"
          name="name"
        />
        <label htmlFor="name">{data.name}</label>
      </div>

      {children && <Items data={children} allData={allData} />}
    </div>
  );
};
