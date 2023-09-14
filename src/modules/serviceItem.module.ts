import { Module } from '@nestjs/common';
import ServiceItemService from '@services/serviceItem/serviceItem.service';
import ServiceItemRepository from '@repositories/serviceItem/serviceRepositoryLocal';

@Module({
  imports: [],
  controllers: [],
  providers: [ServiceItemService, ServiceItemRepository],
  exports: [ServiceItemService],
})
export default class ServiceItemModule {}
