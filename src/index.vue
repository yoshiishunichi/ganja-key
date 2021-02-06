<template>
  <div class="container">
    <Header
      ref="headerRef"
      @child-opening="opening"
      @child-closing="closing"
      @audio-to-main="receiveAudioFromHeader"
      @change-serve="changeKey"
    />
    <div class="key-wrap">
      <Kenban1 ref="keyRef1" class="kenban" @change-end="receiveChangeEnd1" />
      <Kenban2 ref="keyRef2" class="kenban" @change-end="receiveChangeEnd2" />
      <Kenban3 ref="keyRef3" class="kenban" @change-end="receiveChangeEnd3" />
    </div>
    <h3 v-if="changingNow" class="change-title">
      キー変更中<br />
      (画面で変更したいキーを選択して、キーボードを押してね)<br />
      Enterでキャンセル
    </h3>
    <h3 v-if="changeCancel" class="change-title">キャンセル完了</h3>
    <ChangeFinishDeclare v-if="changeFinish" :changed-key="changedKey" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Kenban1 from './components/Kenban1.vue';
import Kenban2 from './components/Kenban2.vue';
import Kenban3 from './components/Kenban3.vue';
import ChangeFinishDeclare from './components/ChangeFinishDeclare.vue';

export default {
  name: 'App',
  components: {
    Header,
    Kenban1,
    Kenban2,
    Kenban3,
    ChangeFinishDeclare,
  },
  data() {
    return {
      showContent: false,
      releaseStop: false,
      audioData: null,
      changingNow: false,
      changeCancel: false,
      changeFinish: false,
      changedKey: '',
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
      if (this.changeCancel) {
        this.changeCancel = false;
      }
      if (this.changeFinish) {
        setTimeout(() => {
          this.changeFinish = false;
        }, 2000);
      }
      if (e.key === 'Enter' && this.changingNow) {
        this.changingNow = false;
        this.$refs.headerRef.toNotChanging();
        this.changeCancel = true;
        setTimeout(() => {
          this.changeCancel = false;
        }, 2000);
        this.$refs.keyRef1.endChaging();
        this.$refs.keyRef2.endChaging();
        this.$refs.keyRef3.endChaging();
      }
    },
    changeKey() {
      this.changingNow = true;
      this.$refs.headerRef.toChanging();
      this.changeCancel = false;
      this.changeFinish = false;
      this.$refs.keyRef1.changeReceive();
      this.$refs.keyRef2.changeReceive();
      this.$refs.keyRef3.changeReceive();
    },
    receiveChangeEnd1(key) {
      this.changedKey = key;
      this.changeFinish = true;
      this.changingNow = false;
      this.$refs.headerRef.toNotChanging();
      this.$refs.keyRef1.endChaging();
    },
    receiveChangeEnd2() {
      this.changingNow = false;
      this.$refs.keyRef2.endChaging();
    },
    receiveChangeEnd3() {
      this.changingNow = false;
      this.$refs.keyRef3.endChaging();
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
* {
  padding: 0;
  margin: 0;
}

html {
  width: 100vw;
  height: 100vh;
  background: rgb(70, 100, 130);
}

body {
  margin: 0;
  padding: 0;
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

h3 {
  font-size: 15px;
  color: white;
  user-select: none;
  margin: 15px 0;
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
