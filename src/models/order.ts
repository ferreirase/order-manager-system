import { v4 as uuidv4 } from 'uuid';
import Product from '@models/product';
import ServiceItem from '@models/serviceItem';
import { IRental } from '@models/rental';

export interface IOrder {
  id: string;
  products: Array<{ item: Product; quantity: number }> | [];
  rentals: Array<IRental> | [];
  services: Array<{ item: ServiceItem }> | [];
}

export default class Order implements IOrder {
  id: string;
  products: Array<{ item: Product; quantity: number }> | [];
  rentals: Array<IRental> | [];
  services: Array<{ item: ServiceItem }> | [];

  constructor(order: Order) {
    this.id = uuidv4();
    this.products = order.products;
    this.rentals = order.rentals;
    this.services = order.services;
  }
}
