import Order from '@models/order';

export default interface IOrderRepository {
  find(): Order[];
  findById(orderId: string): Order | undefined;
}
