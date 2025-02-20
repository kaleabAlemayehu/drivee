import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import about from "../views/about.vue";
import home from "../views/home.vue";
import rentcar from "../views/rentcar.vue";
import rentbike from "../views/rentbike.vue";
import signup from "../views/signup.vue";
import carhosting from "../views/carhosting.vue";

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
		path: "/hosting/car/",
		components: {
			default: carhosting,
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
