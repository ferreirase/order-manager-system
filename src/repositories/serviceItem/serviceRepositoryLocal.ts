import ServiceItem from '@models/serviceItem';
import IServiceItemRepository from './serviceItemInterface';

export default class ServiceItemRepositoryLocal
  implements IServiceItemRepository
{
  serviceItems: Array<ServiceItem> = [];

  findById(serviceItemId: string): ServiceItem | undefined {
    return this.serviceItems.find(
      (serviceItem: ServiceItem) => serviceItem.id === serviceItemId,
    );
  }

  find(): ServiceItem[] {
    return this.serviceItems;
  }
}
