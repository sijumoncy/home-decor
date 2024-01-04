export interface ICreateProductData {
    title: string,
    description: string,
    categories: string[],
    size: string,
    colors: string[],
    price: number,
    rating: number,
    image : File | null 
  }

export interface IProductResponse extends ICreateProductData {
  _id : string
  img : string
}