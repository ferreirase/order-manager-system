import { IRental } from '@models/rental';

export default interface IRentalRepository {
  find(): IRental[];
  findById(rentalId: string): IRental | undefined;
}
