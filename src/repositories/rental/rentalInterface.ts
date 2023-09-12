import Rental from '@models/rental';
import { HttpException } from '@nestjs/common';

export default interface IRentalRepository {
  find(): Rental[];
  findById(rentalId: string): Rental | HttpException;
}
