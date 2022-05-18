import { Product } from "../../domain/entities/product";

interface createProductRequestModel{
     name: string;
     description: string;
     price: Number;
     company: string;
     link: string;
}