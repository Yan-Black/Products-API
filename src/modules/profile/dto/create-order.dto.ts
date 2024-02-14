import type { CartItem, Delivery, Order, Payment } from "../interfaces";

export class CreateOrderDTO {
  readonly userId: string;
  readonly cartId: string;
  readonly items: CartItem[];
  readonly payment: Payment;
  readonly delivery: Delivery;
  readonly comments: string;
  readonly status: Order["status"];
  readonly total: number;
}
