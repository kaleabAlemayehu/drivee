<script setup lang="ts">
import { ref, onBeforeMount, watch, onMounted } from 'vue';
import Table from '../components/Table.vue';
import TableSkeleton from '../components/TableSkeleton.vue';
import type {
  bookingsProp,
  bookings as bookingType,
  APIBookingResponse,
} from '../types/bookings';
import { useUserStore } from '../store/useUserStore';
import { useClient } from '../composables/useClient';
const completedBookings = ref<bookingsProp>();
const confirmedBookings = ref<bookingsProp>();
const canceledBookings = ref<bookingsProp>();
const pendingBookings = ref<bookingsProp>();
const completedIsLoading = ref(true);
const confirmedIsLoading = ref(true);
const canceledIsLoading = ref(true);
const pendingIsLoading = ref(true);
const { user } = useUserStore();
const { get } = useClient();
onBeforeMount(async () => {
  completedIsLoading.value = true;
  try {
    const res = await get('/bookings/?status=completed', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      const BookingData: APIBookingResponse[] = Array.isArray(res.data.message)
        ? res.data.message
        : [];
      const bookings = await transformer(BookingData);
      completedBookings.value = {
        bookings: bookings,
        total: BookingData.length,
        title: 'completed',
      };
      completedIsLoading.value = false;
    } else {
      console.log('API request not successful:', res.data);
      completedBookings.value = {
        // Assign a default/error state
        bookings: [],
        total: 0,
        title: 'completed (failed to load)',
      };
      completedIsLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    completedIsLoading.value = false;
  }

  try {
    const res = await get('/bookings/?status=canceled', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      const BookingData: APIBookingResponse[] = Array.isArray(res.data.message)
        ? res.data.message
        : [];
      const bookings = await transformer(BookingData);
      canceledBookings.value = {
        bookings: bookings,
        total: BookingData.length,
        title: 'canceled',
      };
      canceledIsLoading.value = false;
    } else {
      console.log('API request not successful:', res.data);
      canceledBookings.value = {
        // Assign a default/error state
        bookings: [],
        total: 0,
        title: 'canceled (failed to load)',
      };
      canceledIsLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    canceledIsLoading.value = false;
  }

  try {
    const res = await get('/bookings/?status=pending', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      const BookingData: APIBookingResponse[] = Array.isArray(res.data.message)
        ? res.data.message
        : [];
      const bookings = await transformer(BookingData);
      pendingBookings.value = {
        bookings: bookings,
        total: BookingData.length,
        title: 'pending',
      };
      pendingIsLoading.value = false;
    } else {
      console.log('API request not successful:', res.data);
      pendingBookings.value = {
        // Assign a default/error state
        bookings: [],
        total: 0,
        title: 'pending (failed to load)',
      };
      pendingIsLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    pendingIsLoading.value = false;
  }

  try {
    const res = await get('/bookings/?status=confirmed', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      const BookingData: APIBookingResponse[] = Array.isArray(res.data.message)
        ? res.data.message
        : [];
      const bookings = await transformer(BookingData);
      confirmedBookings.value = {
        bookings: bookings,
        total: BookingData.length,
        title: 'confirmed',
      };
      confirmedIsLoading.value = false;
    } else {
      console.log('API request not successful:', res.data);
      confirmedBookings.value = {
        // Assign a default/error state
        bookings: [],
        total: 0,
        title: 'confirmed (failed to load)',
      };
      confirmedIsLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    confirmedIsLoading.value = false;
  }
});
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
      bookingNo: r.id,
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
</script>
<template>
  <div class="space-y-6">
    <TableSkeleton v-if="confirmedIsLoading" />
    <TableSkeleton v-if="pendingIsLoading" />
    <TableSkeleton v-if="completedIsLoading" />
    <TableSkeleton v-if="canceledIsLoading" />
    <Table
      v-if="!confirmedIsLoading && confirmedBookings"
      :bookings="confirmedBookings"
    />
    <Table
      v-if="!pendingIsLoading && pendingBookings"
      :bookings="pendingBookings"
    />
    <Table
      v-if="!completedIsLoading && completedBookings"
      :bookings="completedBookings"
    />
    <Table
      v-if="!canceledIsLoading && canceledBookings"
      :bookings="canceledBookings"
    />
  </div>
</template>

<style scoped></style>
