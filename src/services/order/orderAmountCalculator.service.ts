import { Injectable } from '@nestjs/common';
import customToFixed from '@utils/customToFixedNumber';
import { IOrderItemTaxCalculatorServiceReturn } from './orderItemTaxCalculator.service';

interface IOrderAmountCalculatorServiceReturn
  extends IOrderItemTaxCalculatorServiceReturn {}

@Injectable()
export default class OrderAmountCalculatorService {
  calculate(order: IOrderAmountCalculatorServiceReturn): number {
    let orderAmount: number = 0;

    orderAmount +=
      order.products && order.products.length
        ? order.products.reduce((accProducts, product) => {
            return accProducts + product.total;
          }, 0)
        : 0;

    orderAmount +=
      order.rentals && order.rentals.length
        ? order.rentals.reduce((accRentals, rental) => {
            return accRentals + rental.total;
          }, 0)
        : 0;

    orderAmount +=
      order.services && order.services.length
        ? order.services.reduce((accServiceItems, serviceItem) => {
            return accServiceItems + serviceItem.total;
          }, 0)
        : 0;

    return customToFixed(orderAmount, 2);
  }
}
