import Product from "../models/pdtInterface";

const shopping: Product[] = [
  { name: "X", price: 125 },
  { name: "Y", price: 50 },
  { name: "Z", price: 7 },
];

const calcAverageProductPrice = (array: Product[]): Product | number => {
  if (array.length) {
    let total = 0;
    array.forEach((item) => {
      total += item.price;
    });
    return total / array.length;
  } else {
    return 0;
  }
};

console.log(calcAverageProductPrice(shopping));
