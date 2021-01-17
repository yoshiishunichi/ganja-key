<template>
  <header>
    <h1><a class="title-link" href="/">3連キーボード図柄</a></h1>
    <button v-if="!showContent" class="setting-btn" type="button" @click="openModal">
      <i class="fa fa-cog mr-2"></i><span></span>
    </button>
    <ModalView
      v-show="showContent"
      ref="modalRef"
      @modal-close="closeModal"
      @audio-to-header="receiveAudioFromModal"
    />
  </header>
</template>

<script>
import ModalView from './ModalView.vue';

export default {
  name: 'Header',
  components: {
    ModalView,
  },
  data() {
    return {
      showContent: false,
      releasestop: false,
      audioData: null,
    };
  },
  methods: {
    openModal() {
      this.showContent = true;
      this.$emit('child-opening');
      this.$refs.modalRef.receiveStatus(this.releasestop);
    },
    closeModal(releasestop) {
      this.showContent = false;
      this.releasestop = releasestop;
      this.$emit('child-closing', this.releasestop);
    },
    receiveAudioFromModal(audiodata) {
      this.audioData = audiodata;
      this.$emit('audio-to-main', this.audioData);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  background: #2c2c33;
  z-index: 1000;
  opacity: 0.9;
  top: 0;
}

h1 {
  color: white;
  font-size: 17px;
  line-height: 17px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  font-weight: bold;
  user-select: none;
}

h1 a {
  outline: none;
}

.setting-btn {
  background: none;
  text-align: right;
  float: right;
  margin-left: auto;
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  width: auto;
  height: 50px;
  border: none;
  outline: none;
  z-index: 2;
}

.setting-btn:hover {
  opacity: 0.5;
}

.title-link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  opacity: 0.8;
}

.fa-cog {
  line-height: 50px;
  color: #eee;
  display: inline;
  font-size: 20px;
}
</style>
