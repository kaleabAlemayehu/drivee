type bookings = {
  bookingNo: string;
  make: string;
  model: string;
  pickUpLocation: string;
  pickUpDate: string;
  returnDate: string;
  payment: number;
  status: string;
};
type APIBookingResponse = {
  id: string;
  car_id: string;
  renter_id: string;
  start_time: string;
  end_time: string;
  status: string;
  total_price: number;
};

interface bookingsProp {
  title: string;
  total: number;
  bookings: Array<bookings>;
}

export type { bookingsProp, bookings, APIBookingResponse };
