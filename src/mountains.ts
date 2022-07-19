import Mountain from "../models/Mntinterfaces";
// import Product from "../models/pdtInterface";
// import InventoryItem from "../models/ivntyInterface";

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

const findNameOfTallestMountain = (array: Mountain[]): Mountain | string => {
  if (array.length) {
    let tallestMountain: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > tallestMountain.height) {
        tallestMountain = item;
      }
    });
    return tallestMountain;
  } else {
    return `""`;
  }
};
// console.log(findNameOfTallestMountain([]));
