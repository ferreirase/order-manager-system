import { Injectable } from '@nestjs/common';
import { IServiceItem } from '@models/serviceItem';
import IServiceItemRepository from './serviceItemInterface';

@Injectable()
export default class ServiceItemRepositoryLocal
  implements IServiceItemRepository
{
  serviceItems: Array<IServiceItem> = [];

  findById(serviceItemId: string): IServiceItem | undefined {
    return this.serviceItems.find(
      (serviceItem: IServiceItem) => serviceItem.id === serviceItemId,
    );
  }

  find(): IServiceItem[] {
    return this.serviceItems;
  }
}
