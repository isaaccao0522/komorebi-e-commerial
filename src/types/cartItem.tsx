interface ICartItem {
  name: string;
  id: string;
  price: number;
  quantity: number;
  product: string;
  image: string;
}

type RawCartItem = Pick<
  ICartItem,
  "image" | "name" | "price" | "product"
>;
