import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';


@Injectable()
export class SeedService {
  
  constructor(
    private readonly productService: ProductsService
  ) {}

  async runSeed() {
    await this.insertSeedProducts();

    return `Seed executed`;
  }

  private async insertSeedProducts() {
    const products = initialData.products;
    const insertPromises = [];
    
    await this.productService.deleteAllProducts();
    
    products.forEach(product => {
      insertPromises.push(this.productService.create(product));
    })

    await Promise.all(insertPromises);

    return true;
  }
}
