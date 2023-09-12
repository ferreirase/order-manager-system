import OrderItem from '@models/orderItem';

export default interface IOrderItemRepository {
  find(): OrderItem[];
}
