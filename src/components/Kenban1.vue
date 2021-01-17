<template>
  <div class="frame">
    <div class="key">
      <div class="white-key" :class="{ actW: actives[0].active }"><p>1</p></div>
      <div class="black-key" :class="{ actB: actives[1].active }"><p>2</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[2].active }"><p>3</p></div>
      <div class="black-key" :class="{ actB: actives[3].active }"><p>4</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[4].active }"><p>5</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[5].active }"><p>6</p></div>
      <div class="black-key" :class="{ actB: actives[6].active }"><p>7</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[7].active }"><p>8</p></div>
      <div class="black-key" :class="{ actB: actives[8].active }"><p>9</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[9].active }"><p>0</p></div>
      <div class="black-key" :class="{ actB: actives[10].active }"><p>-</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[11].active }"><p>^</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kenban2',
  data: function () {
    return {
      actives: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
      keyCode: [
        { code: '1' },
        { code: '2' },
        { code: '3' },
        { code: '4' },
        { code: '5' },
        { code: '6' },
        { code: '7' },
        { code: '8' },
        { code: '9' },
        { code: '0' },
        { code: '-' },
        { code: '^' },
      ],
      source: [null, null, null, null, null, null, null, null, null, null, null, null],
      ctx: new AudioContext(),
      url: './do.mp3',
      do: null,
      openingView: false,
      releaseStop: false,
      audioData: null,
    };
  },
  mounted() {
    window
      .fetch(this.url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        this.do = audioBuffer;
      });
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('keyup', this.keyUp);
  },
  methods: {
    receiveModalStatus(showContent) {
      this.openingView = showContent;
    },
    receiveReleaseStatus(releaseStop) {
      this.releaseStop = releaseStop;
    },
    receiveAudioData(audiodata) {
      this.audioData = audiodata;
      if (this.audioData) {
        window
          .fetch(this.audioData)
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
          .then((audioBuffer) => {
            this.do = audioBuffer;
          });
      } else {
        window
          .fetch(this.url)
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
          .then((audioBuffer) => {
            this.do = audioBuffer;
          });
      }
    },
    play(audioBuffer, rate) {
      this.source[rate + 12] = this.ctx.createBufferSource();
      this.source[rate + 12].buffer = audioBuffer;
      this.source[rate + 12].playbackRate.value = Math.pow(2, rate / 12);
      this.source[rate + 12].connect(this.ctx.destination);
      this.source[rate + 12].start();
    },
    keyDown(e) {
      for (let i = 0; i < 12; i++) {
        if (e.key === this.keyCode[i].code) {
          if (!this.actives[i].active && !this.openingView) {
            console.log(e.key);
            this.play(this.do, -12 + i);
            this.actives[i].active = true;
          }
        }
      }
    },
    keyUp(e) {
      for (let i = 0; i < 12; i++) {
        if (e.key === this.keyCode[i].code) {
          if (this.actives[i].active && this.releaseStop) {
            this.source[i].stop();
          }
          this.actives[i].active = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.frame {
  display: block;
  width: 420px;
  height: 200px;
}

.key {
  position: relative;
  width: 60px;
  height: 200px;
  float: left;
}

.black-key {
  display: block;
  position: absolute;
  top: 0px;
  left: 35px;
  border-radius: 0 0 10px 10px;
  background-color: #000;
  width: 50px;
  height: 100px;
  z-index: 100;
}

.white-key {
  display: block;
  position: absolute;
  top: 0px;
  background-color: #fff;
  border-radius: 5px;
  border: 2px solid #aaa;
  border-top: none;
  width: 58px;
  height: 200px;
}

.black-key p {
  margin-top: 70px;
  color: white;
}

.white-key p {
  margin-top: 170px;
  color: black;
}

p {
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  user-select: none;
}

.actW {
  background: rgb(255, 243, 138);
}

.actB {
  background: rgb(116, 106, 20);
}
</style>
