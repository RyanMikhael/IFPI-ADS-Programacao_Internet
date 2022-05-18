import { Product } from "../../domain/entities/product";

interface updateProductRequestModel{
    name: string;
     description: string;
     price: Number;
     company: string;
     link: string;
}