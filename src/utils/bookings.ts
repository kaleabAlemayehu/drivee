import type { BookingStatus } from '../types/bookings';
const statusColor: Record<BookingStatus, string> = {
  pending: 'bg-amber-100 text-amber-800', // pending
  confirmed: 'bg-blue-100 text-blue-800', // confirmed
  canceled: 'bg-rose-100 text-rose-800', // cancelled
  completed: 'bg-green-100 text-green-800', // completed
};

const getStatusClass = (status: string) => {
  return statusColor[status as BookingStatus] || 'bg-gray-100 text-gray-800';
};
export { getStatusClass };
