import { v4 as uuidv4 } from 'uuid';

export interface IServiceItem {
  id: string;
  title: string;
  price: number;
  hours: number;
}

export default class ServiceItem implements IServiceItem {
  id: string;
  title: string;
  price: number;
  hours: number;

  constructor(serviceItem: ServiceItem) {
    this.id = uuidv4();
    this.title = serviceItem.title;
    this.price = serviceItem.price;
    this.hours = serviceItem.hours;
  }
}
