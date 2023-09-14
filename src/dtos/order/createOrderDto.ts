import { IProduct } from '@models/product';
import { IServiceItem } from '@models/serviceItem';
import { IRental } from '@models/rental';

export type CreateOrderResponse = {
  id: string;
  products?: IProduct[] | [];
  rentals?: IRental[] | [];
  services?: IServiceItem[] | [];
};

export default class CreateOrderDto {
  readonly products?: Array<string> | [];
  readonly rentals?: Array<string> | [];
  readonly services?: Array<string> | [];

  constructor(order: CreateOrderDto) {
    this.products = order?.products;
    this.rentals = order?.rentals;
    this.services = order?.services;
  }
}
