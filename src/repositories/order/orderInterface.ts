import { IOrder } from '@models/order';

export default interface IOrderRepository {
  find(): IOrder[];
  findById(orderId: string): IOrder | undefined;
}
