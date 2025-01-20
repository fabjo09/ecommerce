export interface Product {
    name: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    }[];
    slug: {
      _type: string;
      current: string;
    };
    price: number;
    details: string;
  }

  export interface CartItem extends Product {
    quantity: number;
  }
  