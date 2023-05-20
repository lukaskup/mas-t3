interface IProduct {
  id: string;
  name: string;
  price: number;
  type: string;
}

export interface IPhysical extends IProduct {
  category: string;
  //powtarzalny
  parameters: string[];
  qty: number;
}

export interface IService extends IProduct {
  avgTimeToComplete: string;
  available: boolean;
}
