import Rental from '@models/rental';

export default interface IRentalRepository {
  find(): Rental[];
  findById(rentalId: string): Rental | undefined;
}
