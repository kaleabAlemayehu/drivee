type OrderInfo = {
  icon: string;
  title: string;
  number: number;
};
type CursorPosition = {
  x: number;
  y: number;
};
type Testimonials = {
  name: string;
  title: string;
  comment: string;
  image: string;
};
type Stats = {
  num: string;
  des: string;
};
type CustomerNav = {
  icon: string;
  title: string;
  route: string;
};
type OwnerNav = {
  icon: string;
  title: string;
};
type NavBarNav = {
  title: string;
  route: string;
};

type SignupInputs = {
  first_name: string;
  email: string;
  password: string;
  policy?: boolean;
};
interface CarCardProps {
  id: string;
  thumbnail_picture: string;
  make: string;
  model: string;
  year: string;
  transmission: string;
  fuel_type: string;
  price_per_hour: number;
  mileage: number;
  status: string;
}

type CarResponse = {
  id: string;
  owner_id: string;
  thumbnail_picture: string;
  description: string;
  make: string;
  model: string;
  year: string;
  license_plate: string;
  vin_number: string;
  transmission: string;
  fuel_type: string;
  mileage: number;
  location: { X: number; Y: number };
  price_per_hour: number;
  status: string;
};

type CarPhotos = {
  id: string;
  car_id: string;
  photo_url: string;
};

export type {
  CarPhotos,
  CarResponse,
  CarCardProps,
  SignupInputs,
  CursorPosition,
  CustomerNav,
  NavBarNav,
  OrderInfo,
  OwnerNav,
  Stats,
  Testimonials,
};
