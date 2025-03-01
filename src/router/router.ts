import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import about from "../views/about.vue";
import home from "../views/home.vue";
import rentcar from "../views/rentcar.vue";
import rentbike from "../views/rentbike.vue";
import signup from "../views/signup.vue";
import onboarding from "../views/onboarding.vue";
import carhosting from "../views/carhosting.vue";
import bikehosting from "../views/bikehosting.vue";
import carbooking from "../views/carbooking.vue";
import bikebooking from "../views/bikebooking.vue";
import contactus from "../views/contactus.vue";
import cities from "../views/cities.vue";
import customer from "../views/customer.vue";
import owner from "../views/owner.vue";
const routes = [
	{
		path: "/",
		components: {
			default: home,
			NavBar,
			Footer,
		},
	},
	{
		path: "/customer/",
		components: {
			default: customer,
			NavBar,
			Footer,
		},
	},
	{
		path: "/owner/",
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
		path: "/rentcar/",
		components: {
			default: rentcar,
			NavBar,
			Footer,
		},
	},
	{
		path: "/rentbike/",
		components: {
			default: rentbike,
			NavBar,
			Footer,
		},
	},
	{
		path: "/contactus/",
		components: {
			default: contactus,
			NavBar,
			Footer,
		},
	},
	{
		path: "/hosting/car/",
		components: {
			default: carhosting,
			NavBar,
			Footer,
		},
	},
	{
		path: "/hosting/bike/",
		components: {
			default: bikehosting,
			NavBar,
			Footer,
		},
	},
	{
		path: "/booking/car/",
		components: {
			default: carbooking,
			NavBar,
			Footer,
		},
	},
	{
		path: "/booking/bike/",
		components: {
			default: bikebooking,
			NavBar,
			Footer,
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
];
const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export { router };
