import { Injectable } from '@nestjs/common';
import { IServiceItem } from '@models/serviceItem';
import IServiceItemRepository from './serviceItemInterface';

@Injectable()
export default class ServiceItemRepositoryLocal
  implements IServiceItemRepository
{
  serviceItems: Array<IServiceItem> = [
    {
      id: '3095fb03-5ede-476b-9a24-9a765355a4ff',
      title: 'Fazer site wordpress',
      hours: 40,
      price: 100,
    },
  ];

  findById(serviceItemId: string): IServiceItem | undefined {
    return this.serviceItems.find(
      (serviceItem: IServiceItem) => serviceItem.id === serviceItemId,
    );
  }

  find(): IServiceItem[] {
    return this.serviceItems;
  }
}
