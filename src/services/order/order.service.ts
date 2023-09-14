import { HttpException, Injectable } from '@nestjs/common';
import OrderRepository from '@repositories/order/orderRepositoryLocal';
import OrderItemTaxCalculatorService, {
  IOrderItemTaxCalculatorServiceReturn,
} from './orderItemTaxCalculator.service';
import { IOrder } from '@models/order';

interface IOrderServiceReturn extends IOrderItemTaxCalculatorServiceReturn {}

@Injectable()
export default class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderItemTaxCalculatorService: OrderItemTaxCalculatorService,
  ) {}

  find(): IOrder[] | [] {
    return this.orderRepository.find();
  }

  findById(orderId: string): IOrderServiceReturn | HttpException {
    const orderFound = this.orderRepository.findById(orderId);

    if (!orderFound) throw new HttpException('Order not found!', 404);

    return this.orderItemTaxCalculatorService.calculate(orderFound);
  }
}
