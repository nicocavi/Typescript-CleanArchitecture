import { Product } from "./product";

export interface ProductRepository{
    save(product:Product):Promise<Product>;
    findById(id:string):Promise<Product>;
}