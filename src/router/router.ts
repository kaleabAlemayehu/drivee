import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import about from "../views/about.vue";
import home from "../views/home.vue";
import rentcar from "../views/rentcar.vue";
import rentbike from "../views/rentbike.vue";
import signup from "../views/signup.vue";
import carhosting from "../views/carhosting.vue";
import bikehosting from "../views/bikehosting.vue";
import contactus from "../views/contactus.vue";
import cities from "../views/cities.vue";
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
