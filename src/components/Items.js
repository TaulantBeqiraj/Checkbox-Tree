import { Item } from "./Item";

export const Items = ({ data, allData }) => {
  return data.map((item) => (
    <Item key={item.id} data={item} allData={allData} />
  ));
};
