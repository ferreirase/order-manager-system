import { IProduct } from '@models/product';

export default interface IProductRepository {
  find(): IProduct[];
  findById(productId: string): IProduct | undefined;
}
