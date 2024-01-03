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