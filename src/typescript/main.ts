export interface Product {
  title: string;
  weight: number;
  price: number;
  type: string;
  promo: boolean;
  imagePath: string;
  ingredients: IngredientsForProduct[] | null;
}
export interface IngredientsForProduct {
  ingredTitle: string;
  ingredQuantity: number;
}
export interface Order {
  name: string;
  phone: string;
  orderList: IngredientsForProduct[];
}
export interface Filial {
  filialTitle: string;
  lat: number;
  lon: number;
  phone: string;
  adress: string;
  email: string;
}