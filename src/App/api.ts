


export interface RootObject {
  items: Product[];
  category: Category[];
  users: User[];
  orders: Order2[];
}
interface Order2 {
  orders: Order[];
  userId: number;
  id: number;
}
interface Order {
  quantity: number;
  product: Product;
}
interface User {
  email: string;
  password: string;
  userName?: string;
  mobile?: string;
  id: number;
}
interface Category {
  id: number;
  title: string;
  prefix: string;
  img: string;
}
export interface Product {
  id: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
  max_quantity: number;
}


export async function getProducts(): Promise<RootObject> {
  const results = await fetch("/db.json");

  const products = results.json();

  return products;
}

export type CartItems = { [productID: string]: number };
export type CheckoutResponse = { success: boolean; error?: string };

export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const modifier = Object.keys(items).length > 0 ? "success" : "error";
  const url = `/checkout-${modifier}.json`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}
