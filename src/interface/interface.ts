export interface ShopData {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
  fullPrice: () => string;
}
