import { LastPurchase, ProductItem } from 'interfaces/products';
import { LastBuyers } from 'interfaces/users';
const fechaEjemplo = new Date('2024-02-21T12:00:00');

export const lastBuyers: LastBuyers[] = [
  { buyerName: 'Valentina Villegas', date: new Date('2024-02-21T12:00:00'), total: 50000 },
  { buyerName: 'Cristobal Carrion', date: new Date('2024-02-20T12:00:00'), total: 30000 },
  { buyerName: 'Oliver Macchiato', date: new Date('2024-01-21T12:00:00'), total: 100000 },
];

export const lastPurchase: LastPurchase[] = [
  { productName: 'Producto 1', quantity: 10, price: 5000 },
  { productName: 'Producto 2', quantity: 5, price: 6000 },
  { productName: 'Producto 3', quantity: 15, price: 7000 },
];

export const productsItems: ProductItem[] = [
  { id: 1, productName: 'Producto 1', brand: 'marca1', color: 'rojo', stock: 10, price: 5000 },
  { id: 2, productName: 'Producto 2', brand: 'marca2', color: 'verde', stock: 10, price: 5000 },
  { id: 3, productName: 'Producto 3', brand: 'marca3', color: 'azul', stock: 10, price: 5000 },
];
