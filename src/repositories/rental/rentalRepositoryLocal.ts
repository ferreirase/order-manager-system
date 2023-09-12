import Rental from '@models/rental';
import IRentalRepository from './rentalInterface';

export default class RentalRepositoryLocal implements IRentalRepository {
  rentals: Array<Rental> = [];

  findById(rentalId: string): Rental {
    return this.rentals.find((rental: Rental) => rental.id === rentalId);
  }

  find(): Rental[] {
    return this.rentals;
  }
}
