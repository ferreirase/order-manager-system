import { Injectable } from '@nestjs/common';
import Order from '@models/order';
import Product from '@models/product';
import Rental from '@models/rental';
import ServiceItem from '@models/serviceItem';
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

@Injectable()
export default class OrderItemTaxCalculatorService {
  constructor(private readonly rentalService: RentalService) {}

  calculate(order: Order) {
    return {
      ...order,
      products:
        order.products &&
        order.products.length &&
        order.products.map((product: { item: Product; quantity: number }) => {
          const productTaxStrategy = new ProductTax();

          return {
            ...product,
            total: productTaxStrategy.calculateTax(
              product.item.sale_price * product.quantity,
            ),
          };
        }),
      services:
        order.services &&
        order.services.length &&
        order.services.map(
          (service: { item: ServiceItem; quantity: number }) => {
            const serviceTaxStrategy = new ServiceTax();

            return {
              ...service,
              total: serviceTaxStrategy.calculateTax(
                service.item.price * service.item.hours * service.quantity,
              ),
            };
          },
        ),
      rentals:
        order.rentals &&
        order.rentals.length &&
        order.rentals.map((rental: Rental) => {
          const rentalTaxStrategy = new RentalTax();

          const rentalTotalPrice = this.rentalService.calculateTotalRentalPrice(
            rental.id,
          );

          if (typeof rentalTotalPrice === 'number') {
            return {
              ...rental,
              total: rentalTaxStrategy.calculateTax(rentalTotalPrice),
            };
          }

          return rental;
        }),
    };
  }
}
