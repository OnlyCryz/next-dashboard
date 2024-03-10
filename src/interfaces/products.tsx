export interface LastPurchase {
  productName: string;
  quantity: number;
  price: number;
  total?: number;
}

export interface ProductItem {
  id: number;
  productName: string;
  brand: string;
  color: string;
  stock: number;
  price: number;
}
