import Rental from '@models/rental';
import IRentalRepository from './rentalInterface';

export default class RentalRepositoryLocal implements IRentalRepository {
  rentals: Array<Rental> = [
    {
      id: '453aa330-3ff0-4b16-9b81-5172a57b7ddf',
      period: {
        start_date: new Date('2023-09-01T12:00:00'),
        end_date: new Date('2023-09-02T12:00:00'),
      },
      product: {
        id: 'fb41e157-8bf4-4fe2-9d4c-ce5d89f44847',
        title: 'Produto 1',
        sale_price: 19.99,
        rental_price: {
          by_day: 8.99,
          by_hour: 2.56,
        },
      },
    },
  ];

  findById(rentalId: string): Rental | undefined {
    return this.rentals.find((rental: Rental) => rental.id === rentalId);
  }

  find(): Rental[] {
    return this.rentals;
  }
}
