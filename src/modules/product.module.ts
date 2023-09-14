import { Module } from '@nestjs/common';
import ProductService from '@services/product/product.service';
import ProductRepositoryLocal from '@repositories/product/productRepositoryLocal';

@Module({
  imports: [],
  controllers: [],
  providers: [ProductService, ProductRepositoryLocal],
  exports: [ProductService],
})
export default class ProductModule {}
