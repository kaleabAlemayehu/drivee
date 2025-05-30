type bookings = {
  id: string;
  bookingNo: number;
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
  booking_no: number;
};

interface bookingsProp {
  title: string;
  total: number;
  bookings: Array<bookings>;
}

type BookingStatus = 'pending' | 'confirmed' | 'canceled' | 'completed';

export type { bookingsProp, bookings, APIBookingResponse, BookingStatus };
