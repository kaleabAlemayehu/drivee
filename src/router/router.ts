import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import home from "../views/home.vue";
import rentcar from "../views/rentcar.vue";
import rentbike from "../views/rentbike.vue";
import signup from "../views/signup.vue";
import contact from "../views/contact.vue";
import carhosting from "../views/carhosting.vue";
import bikehosting from "../views/bikehosting.vue";
import carbooking from "../views/carbooking.vue";
import bikebooking from "../views/bikebooking.vue";
import contactus from "../views/contactus.vue";
import cities from "../views/cities.vue";
import customer from "../views/customer.vue";
import owner from "../views/owner.vue";
import onboarding from "../views/onboarding.vue";
import notfound from "../views/notfound.vue";
// INFO: components
import Dashboard from "../components/Dashboard.vue";
import MyProfile from "../components/CustomerMyProfile.vue";
import MyOrders from "../components/CustomerMyOrders.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		components: {
			default: home,
			NavBar,
			Footer,
		},
	},
	{
		path: "/dashboard/customer/",
		components: {
			default: customer,
			NavBar,
			Footer,
		},
		children: [
			{ path: "", component: Dashboard },
			{ path: "profile", component: MyProfile },
			{ path: "order", component: MyOrders },
		],
	},
	{
		path: "/dashboard/owner/",
		components: {
			default: owner,
			NavBar,
			Footer,
		},
	},
	{
		path: "/cities/",
		components: {
			default: cities,
			NavBar,
			Footer,
		},
	},

	{
		path: "/book-car/",
		components: {
			default: rentcar,
			NavBar,
			Footer,
		},
	},
	{
		path: "/book-bike/",
		components: {
			default: rentbike,
			NavBar,
			Footer,
		},
	},
	{
		path: "/contact-us/",
		components: {
			default: contactus,
			NavBar,
			Footer,
		},
	},
	{
		path: "/car-hosting/",
		components: {
			default: carhosting,
			NavBar,
			Footer,
		},
	},
	{
		path: "/bike-hosting/",
		components: {
			default: bikehosting,
			NavBar,
			Footer,
		},
	},
	{
		path: "/car-booking/:id",
		components: {
			default: carbooking,
			NavBar,
			Footer,
		},
	},
	{
		path: "/bike-booking/:id",
		components: {
			default: bikebooking,
			NavBar,
			Footer,
		},
	},
	{
		path: "/contact-owner/",
		components: {
			default: contact,
		},
	},
	{
		path: "/onboarding/",
		components: {
			default: onboarding,
		},
	},
	{
		path: "/signup/",
		components: {
			default: signup,
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		components: {
			default: notfound,
			NavBar,
			Footer,
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export { router };
