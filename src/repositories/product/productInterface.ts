import Product from '@models/product';

export default interface IProductRepository {
  find(): Product[];
  findById(productId: string): Product | undefined;
}
