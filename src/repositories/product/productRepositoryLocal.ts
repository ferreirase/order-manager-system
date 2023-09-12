import Product from '@models/product';
import IProductRepository from './productInterface';

export default class ProductRepositoryLocal implements IProductRepository {
  products: Array<Product> = [
    {
      id: 'fb41e157-8bf4-4fe2-9d4c-ce5d89f44847',
      title: 'Produto 1',
      sale_price: 19.99,
      rental_price: {
        by_day: 8.99,
        by_hour: 2.56,
      },
    },
    {
      id: '126ff1e3-7e74-4856-947a-8b57cfea5e36',
      title: 'Produto 2',
      sale_price: 16.95,
      rental_price: {
        by_day: 7.46,
        by_hour: 1.88,
      },
    },
    {
      id: 'eaad4720-891a-44c0-9f83-ce0a88d69c57',
      title: 'Produto 3',
      sale_price: 4,
      rental_price: {
        by_day: 1.99,
        by_hour: 1,
      },
    },
  ];

  findById(productId: string): Product | undefined {
    return this.products.find((product: Product) => product.id === productId);
  }

  find(): Product[] {
    return this.products;
  }
}
