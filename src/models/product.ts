interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IPhysical extends IProduct {
  type: string;
  parameters: string[];
  qty: number;
}

export interface IService extends IProduct {
  avgTimeToComplete: string;
  available: boolean;
}
