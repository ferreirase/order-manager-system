import { Module } from '@nestjs/common';
import RentalService from '@services/rental/rental.service';
import RentalRepository from '@repositories/rental/rentalRepositoryLocal';

@Module({
  imports: [],
  controllers: [],
  providers: [RentalService, RentalRepository],
  exports: [RentalService],
})
export default class RentalModule {}
