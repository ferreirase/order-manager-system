export default class CreateOrderDto {
  products?: Array<{ id: string; quantity?: number }> | [];
  services?: Array<{ id: string; quantity?: number }> | [];
  rentals?: Array<{ id: string; quantity?: number }> | [];

  constructor(order: CreateOrderDto) {
    this.products = order.products;
    this.services = order.services;
    this.rentals = order.rentals;
  }
}
