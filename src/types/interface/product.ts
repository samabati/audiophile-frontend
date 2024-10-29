export interface Product {
  id: number;
  name: string;
  description: string;
  features: string;
  new: boolean | null;
  slug: string;
  price: number;
  boxItems: {
    id: number;
    item: string;
    quantity: number;
  }[];
  category: {
    id: number;
    name: string;
  };
  mainImage: {
    id: number;
    name: string;
  };
  orderedImages: { order: number; id: number; fileName: string }[];
}
