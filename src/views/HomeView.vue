<template>
  <h2>Start</h2>

  <p>Testar standard-Pinia-räknaren här under. Bara för att.</p>
  <CounterTest />
</template>

<script>
import CounterTest from '../components/CounterTest.vue';

export default {
  data(){
    return {
      name: ''
    }
  },
  components: {
    CounterTest
  }
}
</script>
