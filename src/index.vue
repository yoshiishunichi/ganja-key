<template>
  <div class="container">
    <Header
      @child-opening="opening"
      @child-closing="closing"
      @audio-to-main="receiveAudioFromHeader"
      @change-serve="changeKey"
    />
    <div class="key-wrap">
      <Kenban1 ref="keyRef1" class="kenban" />
      <Kenban2 ref="keyRef2" class="kenban" />
      <Kenban3 ref="keyRef3" class="kenban" />
    </div>
    <h3 v-if="changingNow" class="change-title">
      キー変更中(変更したいキーをクリックしてね)<br />
      Enterで終了
    </h3>
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
      releaseStop: false,
      audioData: null,
      changingNow: false,
    };
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  },
  methods: {
    keyDown(e) {
      if (e.key === 'Enter' && this.changingNow) {
        this.changingNow = false;
        this.$refs.keyRef1.endChaging();
        this.$refs.keyRef2.endChaging();
        this.$refs.keyRef3.endChaging();
      }
    },
    changeKey() {
      this.changingNow = true;
      this.$refs.keyRef1.changeReceive();
      this.$refs.keyRef2.changeReceive();
      this.$refs.keyRef3.changeReceive();
    },
    changeEnd1() {
      this.$refs.keyRef2.changeNow = false;
      this.$refs.keyRef3.changeNow = false;
      console.log('え');
    },
    changeEnd2() {
      this.$refs.keyRef1.changeNow = false;
      this.$refs.keyRef3.changeNow = false;
      console.log('お');
    },
    changeEnd3() {
      this.$refs.keyRef1.changeNow = false;
      this.$refs.keyRef2.changeNow = false;
      console.log('か');
    },
    opening() {
      this.showContent = true;
      this.$refs.keyRef1.receiveModalStatus(this.showContent);
      this.$refs.keyRef2.receiveModalStatus(this.showContent);
      this.$refs.keyRef3.receiveModalStatus(this.showContent);
    },
    closing(releaseStop) {
      this.showContent = false;
      this.releaseStop = releaseStop;

      this.$refs.keyRef1.receiveReleaseStatus(this.releaseStop);
      this.$refs.keyRef2.receiveReleaseStatus(this.releaseStop);
      this.$refs.keyRef3.receiveReleaseStatus(this.releaseStop);

      this.$refs.keyRef1.receiveModalStatus(this.showContent);
      this.$refs.keyRef2.receiveModalStatus(this.showContent);
      this.$refs.keyRef3.receiveModalStatus(this.showContent);
    },
    receiveAudioFromHeader(audiodata) {
      this.audioData = audiodata;
      this.$refs.keyRef1.receiveAudioData(this.audioData);
      this.$refs.keyRef2.receiveAudioData(this.audioData);
      this.$refs.keyRef3.receiveAudioData(this.audioData);
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

.change-title {
  font-size: 17px;
  padding-top: 20px;
  color: white;
  user-select: none;
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
