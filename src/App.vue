<template>
  <div class="container">
    <h1>3連キーボード</h1>
    <Kenban1 class="kenban" />
    <Kenban2 class="kenban" />
    <Kenban3 class="kenban" />
  </div>
</template>

<script>
import Kenban1 from './components/Kenban1.vue';
import Kenban2 from './components/Kenban2.vue';
import Kenban3 from './components/Kenban3.vue';

export default {
  name: 'App',
  components: {
    Kenban1,
    Kenban2,
    Kenban3,
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
  font-size: 21px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  color: rgb(230, 225, 234);
}

.kenban {
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
