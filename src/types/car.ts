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

type APICarResponse = {
  cars: Array<CarCardProps>;
  total: number;
};

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

export type { CarPhotos, CarResponse, CarCardProps, APICarResponse };
