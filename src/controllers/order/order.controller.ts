import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import OrderService from '@services/order/order.service';
import { IOrderItemTaxCalculatorServiceReturn } from '@services/order/orderItemTaxCalculator.service';
import { IOrder } from '@models/order';
import AddItemDto from '@dtos/order/addItemDto';

interface IControllerOrdersReturn
  extends IOrderItemTaxCalculatorServiceReturn {}

@Controller('orders')
export default class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  find(): { orders: IOrder[] } {
    return { orders: this.orderService.find() };
  }

  @Get('/:orderId')
  findById(@Param('orderId') orderId: string): {
    order: IControllerOrdersReturn | HttpException;
  } {
    // console.log(this.orderService.find()[0].items[0].constructor.name);

    return { order: this.orderService.findById(orderId) };
  }

  @Post('/:orderId/items')
  addItems(
    @Param('orderId') orderId: string,
    @Body() body: AddItemDto,
  ): { order: IOrder } {
    return { order: this.orderService.addItem({ ...body, orderId }) };
  }
}
