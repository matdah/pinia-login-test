import { defineStore } from 'pinia';

export const userStore = defineStore({
    id: 'user',
    state: () => ({
        token: sessionStorage.getItem('token'),
        user: JSON.parse(sessionStorage.getItem('user')) || {},
    }),
    getters: {
        getUser() {
            return (state) => state.user;
        }
    },
    actions: {
        async login(email, password) {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();

            // Set data to state
            if (data.token) {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
                this.token = data.token;
                this.user = data.user;

                return true;
            } else {

                // Unset data
                this.token = null;
                this.user = {};

                return false;
            }
                
        },
        logout() {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            this.token = null;
            this.user = {};

            // Route to home page
            router.push({ name: '/' });
        }
    }
});