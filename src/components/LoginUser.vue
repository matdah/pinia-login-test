<template>
    <h2>Inloggning</h2>

    <div class="message" v-if="message">{{ message }}</div>

    <form @submit.prevent="login" v-show="!store.token">
        <label for="email">E-post:</label>
        <br>
        <input type="text" id="email" v-model="email" />
        <br>
        <label for="password">Lösenord:</label>
        <br>
        <input type="password" id="password" v-model="password" />
        <br>
        <button type="submit">Logga in</button>
    </form>

    <div v-show="store.token">
        <p>Du är redan inloggad!</p>
    </div>
</template>

<script>
import { userStore } from '../stores/user';

export default {
    setup() {
        const store = userStore();
        return {
            store
        }
    },
    data() {
        return {
            email: '',
            password: '',
            message: ''
        }
    },
    methods: {
        async login() {
            const response = await this.store.login(this.email, this.password);
            if (response) {
                this.message = 'Lyckad inloggning!';
            } else {
                this.message = 'Felaktigt användarnamn / lösenord! Skärpning!!';
            }
        },        
    }
}
</script>

<style>
.message {
    padding: 1em; border: 1px solid #666; background-color: #ccc; margin-bottom: 1em; }
</style>