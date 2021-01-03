<template>
  <div class="container">
    <h1>ganja-key</h1>
    <Kenban class="kenban" />
  </div>
</template>

<script>
import Kenban from './components/Kenban.vue';

export default {
  name: 'App',
  components: {
    Kenban,
  },
};
</script>

<style>
html {
  width: 100vw;
  height: 100vh;
  background: rgb(70, 100, 130);
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>

<style scoped>
.container {
  height: 100%;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 12px;
  padding-bottom: 24px;
  color: rgb(230, 225, 234);
}

.kenban {
  margin-left: auto;
  margin-right: auto;
}
</style>
