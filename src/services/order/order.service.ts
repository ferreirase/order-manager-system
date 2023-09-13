import { HttpException, Injectable } from '@nestjs/common';
import OrderRepository from '@repositories/order/orderRepositoryLocal';
import Order from '@models/order';
import OrderItemTaxCalculatorService from './orderItemTaxCalculator.service';

@Injectable()
export default class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderItemTaxCalculatorService: OrderItemTaxCalculatorService,
  ) {}

  find(): Order[] | [] {
    return this.orderRepository
      .find()
      .map((order) => this.orderItemTaxCalculatorService.calculate(order));
  }

  findById(orderId: string): Order | HttpException {
    const orderFound = this.orderRepository.findById(orderId);

    if (!orderFound) throw new HttpException('Order not found!', 404);

    return this.orderItemTaxCalculatorService.calculate(orderFound);
  }
}
