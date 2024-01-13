import { ReactNode } from "react";
import { IProductResponse } from "./manageproduct";


export interface ICartItem {
    product : IProductResponse;
    quantity : number;   
}

export interface IStoreProvider {
    children : ReactNode
}