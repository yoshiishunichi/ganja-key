<template>
  <div class="container">
    <Header />
    <InputMusic class="inputmusic" />
    <div class="key-wrap">
      <Kenban1 class="kenban" />
      <Kenban2 class="kenban" />
      <Kenban3 class="kenban" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import InputMusic from './components/InputMusic.vue';
import Kenban1 from './components/Kenban1.vue';
import Kenban2 from './components/Kenban2.vue';
import Kenban3 from './components/Kenban3.vue';

export default {
  name: 'App',
  components: {
    Header,
    InputMusic,
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
  font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro';
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

.inputmusic {
  padding-top: 60px;
}

.key-wrap {
  padding-top: 60px;
}

.kenban {
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
