import { Module } from '@nestjs/common';
import OrderModule from './modules/order.module';

@Module({
  imports: [OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
