import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import about from "./views/about.vue";
import home from "./views/home.vue";
import signup from "./views/signup.vue";
import App from "./App.vue";
import "./style.css";

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
		path: "/about/",
		components: {
			default: about,
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

createApp(App).use(router).mount("#app");
