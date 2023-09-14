import { HttpException, Injectable } from '@nestjs/common';
import ProductRepository from '@repositories/product/productInterface';
import { IProduct } from '@models/product';

@Injectable()
export default class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  find(): IProduct[] | [] {
    return this.productRepository.find();
  }

  findById(productId: string): IProduct | HttpException {
    const productFound = this.productRepository.findById(productId);

    if (!productFound) throw new HttpException('Product not found!', 404);

    return productFound;
  }
}
