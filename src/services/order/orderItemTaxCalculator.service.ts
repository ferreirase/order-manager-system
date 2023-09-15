import { Injectable } from '@nestjs/common';
import { IOrder } from '@models/order';
import { IProduct } from '@models/product';
import { IRental } from '@models/rental';
import { IServiceItem } from '@models/serviceItem';
import RentalService from '@services/rental/rental.service';
import customToFixed from '@utils/customToFixedNumber';

interface TaxStrategy {
  calculateTax(price: number): number;
}

class ProductTax implements TaxStrategy {
  calculateTax(price: number): number {
    return customToFixed((price += 0.1 * price), 2);
  }
}

class ServiceTax implements TaxStrategy {
  calculateTax(price: number): number {
    return customToFixed((price += 0.075 * price), 2);
  }
}

class RentalTax implements TaxStrategy {
  calculateTax(price: number): number {
    return customToFixed((price += 0.05 * price), 2);
  }
}

export interface IOrderItemTaxCalculatorServiceReturn {
  products: Array<{
    total: number;
    item: IProduct;
    quantity: number;
  }>;
  services: Array<{
    total: number;
    item: IServiceItem;
  }>;
  rentals: Array<
    | IRental
    | (IRental & {
        total: number;
      })
  >;
}

@Injectable()
export default class OrderItemTaxCalculatorService {
  constructor(private readonly rentalService: RentalService) {}

  calculate(order: IOrder): IOrderItemTaxCalculatorServiceReturn {
    return {
      ...order,
      products:
        order.products && order.products.length
          ? order.products.map(
              (product: { item: IProduct; quantity: number }) => {
                const productTaxStrategy = new ProductTax();

                return {
                  ...product,
                  total: productTaxStrategy.calculateTax(
                    product.item.sale_price * product.quantity,
                  ),
                };
              },
            )
          : [],
      services:
        order.services && order.services.length
          ? order.services.map(
              (service: { item: IServiceItem; quantity: number }) => {
                const serviceTaxStrategy = new ServiceTax();

                return {
                  ...service,
                  total: serviceTaxStrategy.calculateTax(
                    service.item.price * service.item.hours,
                  ),
                };
              },
            )
          : [],
      rentals:
        order.rentals && order.rentals.length
          ? order.rentals.map((rental) => {
              const rentalTaxStrategy = new RentalTax();

              const rentalTotalPrice =
                this.rentalService.calculateTotalRentalPrice(rental.item.id);

              if (typeof rentalTotalPrice === 'number') {
                return {
                  ...rental.item,
                  total: rentalTaxStrategy.calculateTax(rentalTotalPrice),
                };
              }

              return {
                ...rental.item,
                total: 0,
              };
            })
          : [],
    };
  }
}
