import { v4 as uuidv4 } from 'uuid';
import Product from './product';

export interface IRental {
  id: string;
  product: Product;
  period: {
    start_date: Date;
    end_date: Date;
  };
}

export default class Rental implements IRental {
  id: string;
  product: Product;
  period: {
    start_date: Date;
    end_date: Date;
  };

  constructor(rental: Rental) {
    this.id = uuidv4();
    this.product = rental.product;
    this.period = rental.period;
  }
}
