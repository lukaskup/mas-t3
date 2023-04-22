interface IPerson {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

interface IEmployee extends IPerson {
  pesel: number;
  address: string;
  position: string;
  wage: number;
}

export interface IBoss extends IPerson {
  incomingMeetings?: string[];
}

export interface IClient extends IPerson {
  email: string;
  deliveryAddress: string;
  correspondenceAddress: string;
}

export interface IPhysicalEmployee extends IEmployee {
  courses: string[];
}

enum EducationType {
  secondary = "SECONDARY",
  higher = "HIGHER",
}

export interface IOfficeEmployee extends IEmployee {
  education: EducationType;
}
