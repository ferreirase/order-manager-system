import { Module } from '@nestjs/common';
import OrderService from '@services/order/order.service';
import RentalService from '@services/rental/rental.service';
import OrderItemTaxCalculatorService from '@services/order/orderItemTaxCalculator.service';
import OrderController from '@controllers/order/order.controller';
import OrderRepository from '@repositories/order/orderRepositoryLocal';
import RentalRepositoryLocal from '@repositories/rental/rentalRepositoryLocal';
import ProductRepositoryLocal from '@repositories/product/productRepositoryLocal';
import ServiceItemRepositoryLocal from '@repositories/serviceItem/serviceRepositoryLocal';
import OrderAmountCalculatorService from '@services/order/orderAmountCalculator.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderItemTaxCalculatorService,
    RentalService,
    OrderAmountCalculatorService,
    OrderRepository,
    RentalRepositoryLocal,
    ProductRepositoryLocal,
    ServiceItemRepositoryLocal,
  ],
  exports: [OrderService],
})
export default class OrderModule {}
