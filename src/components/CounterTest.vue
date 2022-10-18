<template>
    <h2>Counter Test</h2>

    <button @click="increment()">{{ store.counter }}</button>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
    setup() {
        const store = useCounterStore();
        return {
            store
        }
    },
    data() {
        return {
            name: ''
        }
    },
    methods: {
        increment() {
            this.store.increment();
        }
    }
}
</script>