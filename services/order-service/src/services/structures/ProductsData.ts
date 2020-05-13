export default interface ProductsData {
  [x: string]: any;
  products?: ProductsEntity[] | null;
}
export interface ProductsEntity {
  title: string;
  image: string;
  price: string;
}
