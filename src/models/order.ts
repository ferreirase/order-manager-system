import { v4 as uuidv4 } from 'uuid';
import Product from '@models/product';
import ServiceItem from '@models/serviceItem';
import Rental from '@models/rental';

export interface IOrder {
  id: string;
  products?: Array<{ item: Product; quantity: number }> | [];
  rentals?: Array<Rental> | [];
  services?: Array<{ item: ServiceItem; quantity: number }> | [];
}

export default class Order implements IOrder {
  id: string;
  products?: Array<{ item: Product; quantity: number }> | [];
  rentals?: Array<Rental> | [];
  services?: Array<{ item: ServiceItem; quantity: number }> | [];

  constructor(order: Order) {
    this.id = uuidv4();
    this.products = order?.products;
    this.rentals = order?.rentals;
    this.services = order?.services;
  }
}
