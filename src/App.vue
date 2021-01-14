<template>
  <div class="container">
    <Header @child-opening="opening" @child-closing="closing" />
    <div class="key-wrap">
      <Kenban1 ref="keyRef" class="kenban" />
      <Kenban2 ref="keyRef" class="kenban" />
      <Kenban3 ref="keyRef" class="kenban" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Kenban1 from './components/Kenban1.vue';
import Kenban2 from './components/Kenban2.vue';
import Kenban3 from './components/Kenban3.vue';

export default {
  name: 'App',
  components: {
    Header,
    Kenban1,
    Kenban2,
    Kenban3,
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    opening() {
      this.showContent = true;
      this.$refs.keyRef.receiveModalStatus(this.showContent);
    },
    closing() {
      this.showContent = false;
      this.$refs.keyRef.receiveModalStatus(this.showContent);
    },
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

.key-wrap {
  padding-top: 60px;
}

.kenban {
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
}
</style>
