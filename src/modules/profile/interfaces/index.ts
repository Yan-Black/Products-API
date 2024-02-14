import type { Product } from "../../products/interfaces";
import type { OrderStatus } from "../constants";

export interface CartItem {
  product: Product;
  count: number;
}

export interface Cart {
  id: string;
  userId: string;
  isDeleted: boolean;
  items: CartItem[];
}

export interface Payment {
  type: string;
  address?: string;
  creditCard?: string;
}

export interface Delivery {
  type: string;
  address: string;
}

export interface Order {
  id: string;
  userId: string;
  cartId: string;
  items: CartItem[];
  payment: Payment;
  delivery: Delivery;
  comments: string;
  status: OrderStatus;
  total: number;
}
