export interface Banner {
    image: {
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    buttonText: string;
    product: {
      _ref: string;
      _type: 'reference';
    };
    desc: string;
    smallText?: string;
    midText?: string;
    largeText1: string;
    largeText2?: string;
    discount: string;
    saleTime: string;
  }