import { IProductResponse } from "./manageproduct";


export interface ICartItem {
    product : IProductResponse;
    quantity : number;   
}