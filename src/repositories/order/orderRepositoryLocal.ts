import { Injectable } from '@nestjs/common';
import { IOrder } from '@models/order';
import IOrderRepository from './orderInterface';
import ProductRepositoryLocal from '@repositories/product/productRepositoryLocal';
import RentalRepositoryLocal from '@repositories/rental/rentalRepositoryLocal';
import ServiceItemRepositoryLocal from '@repositories/serviceItem/serviceRepositoryLocal';

@Injectable()
export default class OrderRepositoryLocal implements IOrderRepository {
  constructor(
    private readonly productRepositoryLocal: ProductRepositoryLocal,
    private readonly rentalRepositoryLocal: RentalRepositoryLocal,
    private readonly serviceItemRepositoryLocal: ServiceItemRepositoryLocal,
  ) {}

  products = this.productRepositoryLocal.find();
  rentals = this.rentalRepositoryLocal.find();
  serviceItems = this.serviceItemRepositoryLocal.find();

  orders: Array<IOrder> = [
    {
      id: '0a7fd7b4-fb24-4a6f-8438-de17112ba2e5',
      products: [
        {
          item: this.products[0],
          quantity: 3,
        },
      ],
    },
    {
      id: '124d866a-90a5-4830-807b-134df8d4d1e9',
      rentals: [this.rentals[0]],
    },
  ];

  findById(orderId: string): IOrder | undefined {
    return this.orders.find((order: IOrder) => order.id === orderId);
  }

  find(): IOrder[] {
    return this.orders;
  }
}
