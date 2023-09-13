import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
  id: string;
  title: string;
  sale_price: number;
  rental_price: {
    by_day: number;
    by_hour: number;
  };
}

export default class Product implements IProduct {
  id: string;
  title: string;
  sale_price: number;
  rental_price: {
    by_day: number;
    by_hour: number;
  };

  constructor(product: Product) {
    this.id = uuidv4();
    this.title = product.title;
    this.sale_price = product.sale_price;
    this.rental_price = product.rental_price;
  }
}
