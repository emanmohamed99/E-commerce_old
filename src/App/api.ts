


export interface Product {
  id: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
  max_quantity: number;
  // Category:[],
  // item:[],
  // user:[],
  // orders:[]
}
export type category = {
  id: number;
  title: string;
  prefix: string;
  img: string;
  max_quantity: number;
};


export async function getProducts(): Promise<any> {
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
