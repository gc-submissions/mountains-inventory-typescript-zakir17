import InventoryItem from "../models/ivntyInterface";
// import Product from "../models/pdtInterface";
const {
  inventoryitem1,
  inventoryitem2,
  inventoryitem3,
} = require("../models/ivntyInterface");

// const inventoryitem1: Product = { name: "motor", price: 10.0 };
// const inventoryitem2: Product = { name: "sensor", price: 12.5 };
// const inventoryitem3: Product = { name: "sensor", price: 1.0 };

const inventory: InventoryItem[] = [
  { product: inventoryitem1, quantity: 10 },
  { product: inventoryitem2, quantity: 4 },
  { product: inventoryitem3, quantity: 20 },
];

// const inventory: InventoryItem[] = [
//   { (name: "motor", price: 10.0,:) quantity: 10 },
//   { name: "sensor", price: 12.5, quantity: 4 },
//   { name: "sensor", price: 1.0, quantity: 20 },
// ];
const calcInventoryValue = (array: InventoryItem[]): InventoryItem | number => {
  let total = 0;
  array.forEach((item) => {
    total += item.quantity * item.price;
  });
  return total;
};

// class Product {
//     name: string;
//     price: number;
//     constructor (name:string, price: number) {
// this.name = name;
// this.price = price
//     }
// }

// let inventoryitem1: Product =  new Product("motor", 10) ;
// let inventoryitem2: Product =  new Product("sensor", 12.5 );
// let inventoryitem3: Product =  new Product("sensor", 1.0);

// const inventory: InventoryItem[] = [
//   { inventoryitem1, quantity: 10 },
//   { pinventoryitem2, quantity: 4 },
//   { inventoryitem3, quantity: 20 }
// ];

console.log(calcInventoryValue(inventory));
