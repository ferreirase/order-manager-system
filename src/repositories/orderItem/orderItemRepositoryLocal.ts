import OrderItem from '../../models/orderItem';
import IOrderItemRepository from './orderItemInterface';

export class OrderItemRepositoryLocal implements IOrderItemRepository {
  orderItems: Array<OrderItem> = [];

  find(): OrderItem[] {
    return this.orderItems;
  }
}
