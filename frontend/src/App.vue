<template>
  <div id="app">
    <h1>Hello from Vue Frontend!</h1>
    <button @click="fetchBackend">Call Backend</button>
    <p>{{ backendMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backendMessage: "",
    };
  },
  methods: {
    async fetchBackend() {
      const response = await fetch("http://localhost:3001");
      this.backendMessage = await response.text();
    },
  },
};
</script>
