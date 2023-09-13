import { IServiceItem } from '@models/serviceItem';

export default interface IServiceItemRepository {
  find(): IServiceItem[];
  findById(serviceItemId: string): IServiceItem | undefined;
}
