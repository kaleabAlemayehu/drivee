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
const bookedBookings = ref<bookingsProp>();
const canceledBookings = ref<bookingsProp>();
const isLoading = ref(true);
const { user } = useUserStore();
const { get } = useClient();
onBeforeMount(async () => {
  isLoading.value = true;
  try {
    const res = await get('/bookings/', {
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
      isLoading.value = false;
    } else {
      console.log('API request not successful:', res.data);
      completedBookings.value = {
        // Assign a default/error state
        bookings: [],
        total: 0,
        title: 'completed (failed to load)',
      };
      isLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    isLoading.value = false;
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
    <TableSkeleton v-if="isLoading" />
    <TableSkeleton v-if="isLoading" />
    <TableSkeleton v-if="isLoading" />
    <Table
      v-if="!isLoading && completedBookings"
      :bookings="completedBookings"
    />
    <Table
      v-if="!isLoading && completedBookings"
      :bookings="completedBookings"
    />
    <Table
      v-if="!isLoading && completedBookings"
      :bookings="completedBookings"
    />
    <!-- Booking Order -->
    <!-- <div -->
    <!--   class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden" -->
    <!-- > -->
    <!--   <div class="px-6 pt-6"> -->
    <!--     <div class="flex justify-between items-center mb-4"> -->
    <!--       <h2 class="text-xl font-bold text-gray-800">Booking Orders</h2> -->
    <!--       <span -->
    <!--         class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full" -->
    <!--       > -->
    <!--         2 Orders -->
    <!--       </span> -->
    <!--     </div> -->
    <!---->
    <!--     <div class="overflow-x-auto pb-6"> -->
    <!--       <table class="w-full"> -->
    <!--         <thead> -->
    <!--           <tr -->
    <!--             class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" -->
    <!--           > -->
    <!--             <th class="px-4 py-3">Booking No</th> -->
    <!--             <th class="px-4 py-3">Vehicle</th> -->
    <!--             <th class="px-4 py-3 hidden md:table-cell">Pick Up Location</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Date</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Return Date</th> -->
    <!--             <th class="px-4 py-3">Payment</th> -->
    <!--             <th class="px-4 py-3">Status</th> -->
    <!--           </tr> -->
    <!--         </thead> -->
    <!--         <tbody class="divide-y divide-gray-100"> -->
    <!--           <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               #02323 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--             > -->
    <!--               Eiffel Tower, New York -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               22/01/2024 -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               28/01/2024 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               $500 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm"> -->
    <!--               <span -->
    <!--                 class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800" -->
    <!--               > -->
    <!--                 Pending -->
    <!--               </span> -->
    <!--             </td> -->
    <!--           </tr> -->
    <!--           <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               #02323 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--             > -->
    <!--               Eiffel Tower, New York -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               22/01/2024 -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               28/01/2024 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               $500 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm"> -->
    <!--               <span -->
    <!--                 class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" -->
    <!--               > -->
    <!--                 In Progress -->
    <!--               </span> -->
    <!--             </td> -->
    <!--           </tr> -->
    <!--         </tbody> -->
    <!--       </table> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->

    <!-- Completed Order -->
    <!-- <div -->
    <!--   class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden" -->
    <!-- > -->
    <!--   <div class="px-6 pt-6"> -->
    <!--     <div class="flex justify-between items-center mb-4"> -->
    <!--       <h2 class="text-xl font-bold text-gray-800">Completed Orders</h2> -->
    <!--       <span -->
    <!--         class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full" -->
    <!--       > -->
    <!--         2 Orders -->
    <!--       </span> -->
    <!--     </div> -->
    <!---->
    <!--     <div class="overflow-x-auto pb-6"> -->
    <!--       <table class="w-full"> -->
    <!--         <thead> -->
    <!--           <tr -->
    <!--             class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" -->
    <!--           > -->
    <!--             <th class="px-4 py-3">Booking No</th> -->
    <!--             <th class="px-4 py-3">Vehicle</th> -->
    <!--             <th class="px-4 py-3 hidden md:table-cell">Pick Up Location</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Date</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Return Date</th> -->
    <!--             <th class="px-4 py-3">Payment</th> -->
    <!--             <th class="px-4 py-3">Status</th> -->
    <!--           </tr> -->
    <!--         </thead> -->
    <!--       </table> -->
    <!--       <div -->
    <!--         class="w-full min-h-58 flex font-normal text-2xl justify-center items-center" -->
    <!--         v-if="!bookings && !isLoading" -->
    <!--       > -->
    <!--         Oops...There is no booking -->
    <!--       </div> -->
    <!---->
    <!--       <div class="overflow-x-auto pb-6"> -->
    <!--         <table class="w-full"> -->
    <!--           <tbody -->
    <!--             class="divide-y divide-gray-100" -->
    <!--             v-if="!isLoading && bookings" -->
    <!--           > -->
    <!--             <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--               <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--                 #02323 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--               > -->
    <!--                 Eiffel Tower, New York -->
    <!--               </td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--               > -->
    <!--                 22/01/2024 -->
    <!--               </td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--               > -->
    <!--                 28/01/2024 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--                 $500 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm"> -->
    <!--                 <span -->
    <!--                   class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" -->
    <!--                 > -->
    <!--                   Completed -->
    <!--                 </span> -->
    <!--               </td> -->
    <!--             </tr> -->
    <!--             <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--               <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--                 #02323 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--               > -->
    <!--                 Eiffel Tower, New York -->
    <!--               </td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--               > -->
    <!--                 22/01/2024 -->
    <!--               </td> -->
    <!--               <td -->
    <!--                 class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--               > -->
    <!--                 28/01/2024 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--                 $500 -->
    <!--               </td> -->
    <!--               <td class="px-4 py-4 text-sm"> -->
    <!--                 <span -->
    <!--                   class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" -->
    <!--                 > -->
    <!--                   Completed -->
    <!--                 </span> -->
    <!--               </td> -->
    <!--             </tr> -->
    <!--           </tbody> -->
    <!--         </table> -->
    <!--       </div> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->

    <!-- Cancelled Order -->
    <!-- <div -->
    <!--   class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden" -->
    <!-- > -->
    <!--   <div class="px-6 pt-6"> -->
    <!--     <div class="flex justify-between items-center mb-4"> -->
    <!--       <h2 class="text-xl font-bold text-gray-800">Cancelled Orders</h2> -->
    <!--       <span -->
    <!--         class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full" -->
    <!--       > -->
    <!--         2 Orders -->
    <!--       </span> -->
    <!--     </div> -->
    <!---->
    <!--     <div class="overflow-x-auto pb-6"> -->
    <!--       <table class="w-full"> -->
    <!--         <thead> -->
    <!--           <tr -->
    <!--             class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" -->
    <!--           > -->
    <!--             <th class="px-4 py-3">Booking No</th> -->
    <!--             <th class="px-4 py-3">Vehicle</th> -->
    <!--             <th class="px-4 py-3 hidden md:table-cell">Pick Up Location</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Date</th> -->
    <!--             <th class="px-4 py-3 hidden lg:table-cell">Return Date</th> -->
    <!--             <th class="px-4 py-3">Payment</th> -->
    <!--             <th class="px-4 py-3">Status</th> -->
    <!--           </tr> -->
    <!--         </thead> -->
    <!--         <tbody class="divide-y divide-gray-100"> -->
    <!--           <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               #02323 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--             > -->
    <!--               Eiffel Tower, New York -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               22/01/2024 -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               28/01/2024 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               $500 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm"> -->
    <!--               <span -->
    <!--                 class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800" -->
    <!--               > -->
    <!--                 Cancelled -->
    <!--               </span> -->
    <!--             </td> -->
    <!--           </tr> -->
    <!--           <tr class="hover:bg-gray-50 transition-colors"> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               #02323 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
    <!--             > -->
    <!--               Eiffel Tower, New York -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               22/01/2024 -->
    <!--             </td> -->
    <!--             <td -->
    <!--               class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
    <!--             > -->
    <!--               28/01/2024 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
    <!--               $500 -->
    <!--             </td> -->
    <!--             <td class="px-4 py-4 text-sm"> -->
    <!--               <span -->
    <!--                 class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800" -->
    <!--               > -->
    <!--                 Cancelled -->
    <!--               </span> -->
    <!--             </td> -->
    <!--           </tr> -->
    <!--         </tbody> -->
    <!--       </table> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->
  </div>
</template>

<style scoped></style>
