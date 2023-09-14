import { HttpException, Injectable } from '@nestjs/common';
import ServiceItemtRepository from '@repositories/serviceItem/serviceItemInterface';
import { IServiceItem } from '@models/serviceItem';

@Injectable()
export default class ServiceItemService {
  constructor(
    private readonly serviceItemtRepository: ServiceItemtRepository,
  ) {}

  find(): IServiceItem[] | [] {
    return this.serviceItemtRepository.find();
  }

  findById(serviceItemId: string): IServiceItem | HttpException {
    const serviceItemFound =
      this.serviceItemtRepository.findById(serviceItemId);

    if (!serviceItemFound)
      throw new HttpException('Service item not found!', 404);

    return serviceItemFound;
  }
}
