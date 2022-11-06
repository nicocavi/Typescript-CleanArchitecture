import {Product} from './product.entity';

export interface ProductRepository{
    save(product:Product):Promise<Product>;
    findById(id:string):Promise<Product>;
}