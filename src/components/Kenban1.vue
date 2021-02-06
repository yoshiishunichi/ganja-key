<template>
  <div class="frame">
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[0].active, changeW: actives[0].changing }"
        @click="tapKey(0)"
      >
        <p>{{ keyCode[0].code.toUpperCase() }}</p>
      </div>
      <div
        class="black-key"
        :class="{ actB: actives[1].active, changeB: actives[1].changing }"
        @click="tapKey(1)"
      >
        <p>{{ keyCode[1].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[2].active, changeW: actives[2].changing }"
        @click="tapKey(2)"
      >
        <p>{{ keyCode[2].code.toUpperCase() }}</p>
      </div>
      <div
        class="black-key"
        :class="{ actB: actives[3].active, changeB: actives[3].changing }"
        @click="tapKey(3)"
      >
        <p>{{ keyCode[3].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[4].active, changeW: actives[4].changing }"
        @click="tapKey(4)"
      >
        <p>{{ keyCode[4].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[5].active, changeW: actives[5].changing }"
        @click="tapKey(5)"
      >
        <p>{{ keyCode[5].code.toUpperCase() }}</p>
      </div>
      <div
        class="black-key"
        :class="{ actB: actives[6].active, changeB: actives[6].changing }"
        @click="tapKey(6)"
      >
        <p>{{ keyCode[6].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[7].active, changeW: actives[7].changing }"
        @click="tapKey(7)"
      >
        <p>{{ keyCode[7].code.toUpperCase() }}</p>
      </div>
      <div
        class="black-key"
        :class="{ actB: actives[8].active, changeB: actives[8].changing }"
        @click="tapKey(8)"
      >
        <p>{{ keyCode[8].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[9].active, changeW: actives[9].changing }"
        @click="tapKey(9)"
      >
        <p>{{ keyCode[9].code.toUpperCase() }}</p>
      </div>
      <div
        class="black-key"
        :class="{ actB: actives[10].active, changeB: actives[10].changing }"
        @click="tapKey(10)"
      >
        <p>{{ keyCode[10].code.toUpperCase() }}</p>
      </div>
    </div>
    <div class="key">
      <div
        class="white-key"
        :class="{ actW: actives[11].active, changeW: actives[11].changing }"
        @click="tapKey(11)"
      >
        <p>{{ keyCode[11].code.toUpperCase() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kenban2',
  data: function () {
    return {
      actives: [
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
        { active: false, changing: false },
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
      changeNow: false,
      changeNum: [],
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
    tapKey(num) {
      if (this.changeNow) {
        this.actives[num].changing = !this.actives[num].changing;
        // 配列changeNumに格納したい
        let stillContained = false;
        for (let i = 0; i < 12; i++) {
          if (this.changeNum[i] === num) {
            stillContained = true;
            // 重複した時にキー.changingを解除
            this.changeNum.splice(i, 1);
          }
        }
        if (!stillContained) {
          this.changeNum.push(num);
        }
      }
      console.log('変更する奴ら:', this.changeNum);
    },
    changeReceive() {
      console.log('変更の通知受け取ったよ1');
      this.changeNow = true;
    },
    endChaging() {
      console.log('変更の終了を受け取ったよ1');
      this.changeNum = [];
      this.changeNow = false;
      for (let i = 0; i < 12; i++) {
        if (this.actives[i].changing) {
          this.actives[i].changing = false;
        }
      }
    },
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
        if (
          e.key === this.keyCode[i].code &&
          !this.actives[i].active &&
          !this.openingView &&
          !this.changeNow
        ) {
          this.play(this.do, -12 + i);
          this.actives[i].active = true;
        }
      }
      if (this.changeNow && e.key != 'Enter') {
        console.log('変更1', e.key);
        for (let i = 0; i < 12; i++) {
          if (this.actives[i].changing) {
            this.keyCode[i].code = e.key;
            this.actives[i].changing = false;
            console.log('i:', i);
          }
        }
        this.changeNum = [];
        this.changeNow = false;
        this.endChaging();
        this.$emit('change-end', e.key.toUpperCase());
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
  cursor: pointer;
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

.changeW {
  background: rgb(171, 212, 255);
}

.changeB {
  background: rgb(0, 80, 167);
}
</style>
