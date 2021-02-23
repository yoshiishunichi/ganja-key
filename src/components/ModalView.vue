<template>
  <div id="overlay" @click="clickEvent">
    <div id="modalwindow" @click="stopEvent">
      <h2>設定</h2>
      <InputMusic class="audioreceiver" @audio-serve="receiveAudioData" />
      <p class="release-stop-text">
        <input id="stopsound" v-model="releasestop" type="checkbox" /><label
          for="stopsound"
          class="stopsoundlabel"
          >指を離したら音を止める</label
        >
      </p>
      <button class="change-key-btn" @click="tapKeyChange">キー変更</button>
      <button class="default-btn" @click="tapKeyDefault">配列をデフォルトに戻す</button>
      <button @click="clickEvent">閉じる</button>
    </div>
  </div>
</template>

<script>
import InputMusic from './InputMusic.vue';

export default {
  name: 'ModalView',
  components: {
    InputMusic,
  },
  data() {
    return {
      releasestop: null,
      audioData: null,
    };
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  },
  methods: {
    clickEvent() {
      this.$emit('modal-close', this.releasestop);
    },
    stopEvent() {
      event.stopPropagation();
    },
    receiveStatus(status) {
      this.releasestop = status;
      window.addEventListener('keydown', this.keyDown);
    },
    receiveAudioData(audiodata) {
      this.audioData = audiodata;
      this.$emit('audio-to-header', this.audioData);
    },
    keyDown(e) {
      if (e.key === 'Escape') {
        this.clickEvent();
      }
    },
    tapKeyChange() {
      this.clickEvent();
      this.$emit('child-change');
    },
    tapKeyDefault() {
      this.clickEvent();
      this.$emit('child-default');
    },
  },
};
</script>

<style scoped>
h2 {
  user-select: none;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 17px;
  border-bottom: solid 1px #ccc;
  width: 70%;
  text-align: center;
  padding: 8px;
}

.audioreceiver {
  margin-top: 24px;
}

#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

#modalwindow {
  z-index: 2;
  width: 70%;
  padding: 1em;
  background: rgba(255, 255, 255, 1);
}

#stopsound {
  outline: none;
  margin-right: 6px;
}

.stopsoundlabel {
  user-select: none;
}

.release-stop-text {
  margin: 12px auto;
  font-weight: bold;
  font-size: 15px;
}

button {
  user-select: none;
  cursor: pointer;
  max-width: 400px;
  width: 80%;
  height: 35px;
  border: 2px solid #000;
  border-radius: 15px;
  outline: none;
  font-weight: bold;
  background: rgb(50, 70, 120);
  color: #fff;
  margin: 12px auto;
}

button:hover {
  opacity: 0.8;
}
</style>
