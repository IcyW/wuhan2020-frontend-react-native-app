type CreatorType = {
  username: string;
  emailVerified: boolean;
  mobilePhoneNumber: string;
  mobilePhoneVerified: boolean;
  objectId: string;
  createdAt: string;
  updatedAt: string;
};

type ContectType = {
  phone: string;
  name: string;
};

type CoordsType = {
  latitude: number;
  longitude: number;
};

type SupplyType = {
  name: string;
  type: string;
  remark: string;
  count: string;
};

type HospitalType = {
  objectId: string;
  hospital: string;
  address: string;
  remark: string;
  creator: CreatorType;
  contacts: ContectType[];
  coords: CoordsType;
  city: string;
  url: string;
  province: string;
  district: string;
  createdAt: string;
  updatedAt: string;
  supplies: SupplyType[];
};

type Wuhan2020ContactType = {
  name: string;
  tel: string;
};

type LogisticType = {
  id: number;
  name: string;
  area: string;
  date: string;
  url: string;
  remark: string;
  contacts: Wuhan2020ContactType[];
};

type DonationType = {
  id: number;
  name: string;
  method: string;
  info: string;
  date: string;
  url: string;
  status: string;
};

type HotelType = {
  id: number;
  province: string;
  city: string;
  contacts: Wuhan2020ContactType[];
  address: string;
  name: string;
  date: string;
  url: string;
  remark: string | null;
};

type ConsultationType = {
  id: number;
  name: string;
  contacts: Wuhan2020ContactType[];
  date: string;
  url: string;
  remark: string | null;
};
