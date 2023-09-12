import { v4 as uuidv4 } from 'uuid';

export default class Service {
  id: string;
  title: string;
  price: number;
  hours: number;

  constructor(service: Service) {
    this.id = uuidv4();
    this.title = service.title;
    this.price = service.price;
    this.hours = service.hours;
  }
}
