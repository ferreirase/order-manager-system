import ServiceItem from '@models/serviceItem';

export default interface IServiceItemRepository {
  find(): ServiceItem[];
  findById(serviceItemId: string): ServiceItem | undefined;
}
