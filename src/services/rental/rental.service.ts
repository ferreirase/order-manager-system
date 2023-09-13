import { HttpException, Injectable } from '@nestjs/common';
import RentalRepository from '@repositories/rental/rentalRepositoryLocal';
import { IRental } from '@models/rental';
import { DifferenceInHours } from '@utils/dateDifferenceCalculator';

@Injectable()
export default class RentalService {
  constructor(private readonly rentalRepository: RentalRepository) {}

  find(): IRental[] | [] {
    return this.rentalRepository.find();
  }

  findById(rentalId: string): IRental | HttpException {
    const rentalFound = this.rentalRepository.findById(rentalId);

    if (!rentalFound) throw new HttpException('Rental not found!', 404);

    return rentalFound;
  }

  calculateTotalRentalPrice(rentalId: string): number | HttpException {
    const rentalFound = this.rentalRepository.findById(rentalId);

    if (!rentalFound) throw new HttpException('Rental not found!', 404);

    const totalPeriodRentalInHours = DifferenceInHours(
      rentalFound.period.end_date,
      rentalFound.period.start_date,
    );

    if (totalPeriodRentalInHours < 24)
      return (
        rentalFound.product.rental_price.by_hour * totalPeriodRentalInHours
      );

    return (
      (totalPeriodRentalInHours / 24) * rentalFound.product.rental_price.by_day
    );
  }
}
