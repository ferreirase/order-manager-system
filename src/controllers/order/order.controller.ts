import { Controller, Get, HttpException, Param } from '@nestjs/common';
import Order from '@models/order';
import OrderService from '@services/order/order.service';

@Controller('orders')
export default class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  find(): { orders: Order[] } {
    return { orders: this.orderService.find() };
  }

  @Get('/:orderId')
  findById(@Param('orderId') orderId: string): {
    order: Order | HttpException;
  } {
    // console.log(this.orderService.find()[0].items[0].constructor.name);

    return { order: this.orderService.findById(orderId) };
  }
}
