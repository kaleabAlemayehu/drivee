import {defineStore} from "pinia"

export const useUserStore = defineStore("user", {
	state: () => ({
		user: JSON.parse(localStorage.getItem("user") || null),
		// user: null
	}),
	getters: {
		isAuthincated: (state) => !!state.user 
	},
	actions: {
		signup(name,email, password){
			// make request to signup
			console.log(`name: ${name}, email: ${email}, password: ${password}`)

		},
		login(email, pasword){
			// make request to login
		},
		logout(){
			// clear user data
		},
		
	}

})
