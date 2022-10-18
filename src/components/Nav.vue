<template>
    <div id="admin-bar" v-if="uStore.token">
      <b>Token:</b> {{ uStore.token }} | <b>Username:</b> {{ uStore.user.email }}
    </div>
    <nav id="main-nav">
        <ul>
            <li>
                <RouterLink to="/">Start</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">Om sidan</RouterLink>
            </li>
            <li v-if="uStore.token" class="admin-buttons">
                <span @click="uStore.logout()">Logga ut</span>
            </li>
            <li v-else="uStore.token" class="admin-buttons">
                <RouterLink to="/login">Logga in</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { userStore } from '../stores/user';
const uStore = userStore();
</script>