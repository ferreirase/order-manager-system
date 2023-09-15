import { v4 as uudiv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import Order, { IOrder } from '@models/order';
import IOrderRepository from './orderInterface';
import ProductRepositoryLocal from '@repositories/product/productRepositoryLocal';
import RentalRepositoryLocal from '@repositories/rental/rentalRepositoryLocal';
import ServiceItemRepositoryLocal from '@repositories/serviceItem/serviceRepositoryLocal';

@Injectable()
export default class OrderRepositoryLocal implements IOrderRepository {
  constructor() {}

  products = new ProductRepositoryLocal().find();
  rentals = new RentalRepositoryLocal().find();
  serviceItems = new ServiceItemRepositoryLocal().find();

  orders: Array<IOrder> = [
    {
      id: '0a7fd7b4-fb24-4a6f-8438-de17112ba2e5',
      services: [],
      rentals: [],
      products: [],
    },
    {
      id: '124d866a-90a5-4830-807b-134df8d4d1e9',
      services: [],
      rentals: [],
      products: [],
    },
  ];

  create(): IOrder {
    const newOrder = new Order({
      id: uudiv4(),
      products: [],
      services: [],
      rentals: [],
    });

    this.orders.push(newOrder);

    return newOrder;
  }

  findById(orderId: string): IOrder | undefined {
    return this.orders.find((order: IOrder) => order.id === orderId);
  }

  find(): IOrder[] {
    return this.orders;
  }

  update(newOrder: IOrder): IOrder {
    this.orders[this.orders.findIndex((order) => order.id === newOrder.id)] = {
      ...newOrder,
    };

    return this.orders[
      this.orders.findIndex((order) => order.id === newOrder.id)
    ];
  }
}
