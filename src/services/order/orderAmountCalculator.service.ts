import { Injectable } from '@nestjs/common';
import customToFixed from '@utils/customToFixedNumber';
import { IOrderItemTaxCalculatorServiceReturn } from './orderItemTaxCalculator.service';

interface IOrderAmountCalculatorServiceReturn
  extends IOrderItemTaxCalculatorServiceReturn {}

@Injectable()
export default class OrderAmountCalculatorService {
  calculate(order: IOrderAmountCalculatorServiceReturn): number[] {
    return (
      order.products &&
      order.products.length &&
      order.products.map((product) => customToFixed(product.total, 2))
    );
  }
}
