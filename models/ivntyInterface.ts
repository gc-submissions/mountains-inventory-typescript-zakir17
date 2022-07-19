import Product from "../models/pdtInterface";

export default interface InventoryItem {
  product: Product[];
  quantity: number;
}

const inventoryitem1: Product = { name: "motor", price: 10.0 };
const inventoryitem2: Product = { name: "sensor", price: 12.5 };
const inventoryitem3: Product = { name: "sensor", price: 1.0 };

module.exports = { inventoryitem1, inventoryitem2, inventoryitem3 };
