import { HttpException, Injectable } from '@nestjs/common';
import OrderRepository from '@repositories/order/orderRepositoryLocal';
import ProductService from '@services/product/product.service';
import ServiceItemService from '@services/serviceItem/serviceItem.service';
import RentalService from '@services/rental/rental.service';
import OrderItemTaxCalculatorService, {
  IOrderItemTaxCalculatorServiceReturn,
} from './orderItemTaxCalculator.service';
import { IOrder } from '@models/order';
import AddItemDto from '@dtos/order/addItemDto';

interface IOrderServiceReturn extends IOrderItemTaxCalculatorServiceReturn {}

@Injectable()
export default class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productService: ProductService,
    private readonly serviceItemService: ServiceItemService,
    private readonly rentalService: RentalService,
    private readonly orderItemTaxCalculatorService: OrderItemTaxCalculatorService,
  ) {}

  private AddProductStrategy(
    order: IOrder,
    service: ProductService,
    items: Array<{ id: string; quantity?: number }>,
  ): IOrder {
    items.forEach((item) => {
      order.products.push({
        item: service.findById(item.id),
        quantity: item.quantity,
      } as never);
    });

    return this.orderRepository.update(order);
  }

  private AddServiceItemStrategy(
    order: IOrder,
    service: ServiceItemService,
    items: Array<{ id: string; quantity?: number }>,
  ): IOrder {
    items.forEach((item) => {
      order.services.push({
        item: service.findById(item.id),
        quantity: item.quantity,
      } as never);
    });

    return this.orderRepository.update(order);
  }

  private AddRentalStrategy(
    order: IOrder,
    service: RentalService,
    items: Array<{ id: string; quantity?: number }>,
  ): IOrder {
    items.forEach((item) => {
      order.rentals.push({
        item: service.findById(item.id),
      } as never);
    });

    return this.orderRepository.update(order);
  }

  find(): IOrder[] | [] {
    return this.orderRepository.find();
  }

  addItem(payload: AddItemDto): IOrder {
    const order = this.orderRepository.findById(payload.orderId);

    if (!order) throw new HttpException('Order not found', 400);

    switch (payload.type) {
      case 'product':
        return this.AddProductStrategy(
          order,
          this.productService,
          payload.items,
        );
      case 'service':
        return this.AddServiceItemStrategy(
          order,
          this.serviceItemService,
          payload.items,
        );
      case 'rental':
        return this.AddRentalStrategy(order, this.rentalService, payload.items);
      default:
        throw new HttpException('Item type not accepted', 400);
    }
  }

  findById(orderId: string): IOrderServiceReturn | HttpException {
    const orderFound = this.orderRepository.findById(orderId);

    if (!orderFound) throw new HttpException('Order not found!', 404);

    return this.orderItemTaxCalculatorService.calculate(orderFound);
  }
}
