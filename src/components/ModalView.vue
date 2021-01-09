<template>
  <div id="overlay" @click="clickEvent">
    <div id="modalwindow" @click="stopEvent">
      <h2>設定</h2>
      <InputMusic />
      <p>
        <input id="stopsound" v-model="releasestop" type="checkbox" /><label
          for="stopsound"
          class="stopsoundlabel"
          >指を離したら音を止める{{ releasestop }}</label
        >
      </p>
      <p><button @click="clickEvent">閉じる</button></p>
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
      releasestop: 'false',
    };
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
    },
  },
};
</script>

<style scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#modalwindow {
  z-index: 2;
  width: 70%;
  padding: 1em;
  background: #fff;
}

.stopsoundlabel {
  user-select: none;
}
</style>
