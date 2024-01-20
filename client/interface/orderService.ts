interface IOrderAddressFormData {
  firstName: string;
  line1: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
  lastName?: string | undefined;
  line2?: string | undefined;
}

export interface orderProductDetail {
  productId : string,
  quantity : number
}

export interface IcreateOrderData {
  products : orderProductDetail[],
  amount : number
  address : IOrderAddressFormData
}
