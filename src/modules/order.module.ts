import { Module } from '@nestjs/common';
import OrderService from '@services/order/order.service';
import OrderItemTaxCalculatorService from '@services/order/orderItemTaxCalculator.service';
import OrderController from '@controllers/order/order.controller';
import ProductModule from './product.module';
import RentalModule from './rental.module';
import ServiceItemModule from './serviceItem.module';
import OrderRepositoryLocal from '@repositories/order/orderRepositoryLocal';
import OrderAmountCalculatorService from '@services/order/orderAmountCalculator.service';

@Module({
  imports: [ProductModule, RentalModule, ServiceItemModule],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderItemTaxCalculatorService,
    OrderAmountCalculatorService,
    OrderRepositoryLocal,
  ],
  exports: [OrderService],
})
export default class OrderModule {}
