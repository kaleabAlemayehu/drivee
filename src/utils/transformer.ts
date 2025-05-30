import type {
  APIBookingResponse,
  bookings as bookingType,
} from '../types/bookings';
import { useClient } from '../composables/useClient';
const { get } = useClient();
const transformer = async (
  response: APIBookingResponse[],
): Promise<bookingType[]> => {
  const bookings: bookingType[] = [] as bookingType[];
  for (let r of response) {
    let booking: bookingType;
    const res = await get(`/cars/${r.car_id}`);
    let car;
    if (res.data.status == 'success') {
      car = res.data.message;
    }
    booking = {
      id: r.id,
      bookingNo: r.booking_no,
      make: car.make,
      model: car.model,
      pickUpLocation: 'NewYork',
      pickUpDate: r.start_time,
      returnDate: r.end_time,
      status: r.status,
      payment: r.total_price,
    };
    bookings.push(booking);
  }
  return bookings;
};

export { transformer };
