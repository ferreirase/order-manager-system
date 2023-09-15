export default class AddItemDto {
  orderId: string;
  type: string;
  items: Array<{ id: string; quantity?: number }>;

  constructor(order: AddItemDto) {
    this.orderId = order.orderId;
    this.type = order.type;
    this.items = order.items;
  }
}
