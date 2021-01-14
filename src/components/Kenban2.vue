<template>
  <div class="frame">
    <div class="key">
      <div class="white-key" :class="{ actW: actives[0].active }"><p>Q</p></div>
      <div class="black-key" :class="{ actB: actives[1].active }"><p>W</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[2].active }"><p>E</p></div>
      <div class="black-key" :class="{ actB: actives[3].active }"><p>R</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[4].active }"><p>T</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[5].active }"><p>Y</p></div>
      <div class="black-key" :class="{ actB: actives[6].active }"><p>U</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[7].active }"><p>I</p></div>
      <div class="black-key" :class="{ actB: actives[8].active }"><p>O</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[9].active }"><p>P</p></div>
      <div class="black-key" :class="{ actB: actives[10].active }"><p>@</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[11].active }"><p>[</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kenban2',
  data() {
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
      ctx: new AudioContext(),
      url: './do.mp3',
      do: null,
      openingView: false,
    };
  },
  created() {
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
      console.log('受け取り完了:', this.openingView);
    },
    play(audioBuffer, rate) {
      const source = this.ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.playbackRate.value = Math.pow(2, rate / 12);
      source.connect(this.ctx.destination);
      source.start();
    },
    keyDown(e) {
      if (e.key === 'q') {
        if (this.actives[0].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 0);
          this.actives[0].active = true;
        }
      } else if (e.key === 'w') {
        if (this.actives[1].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 1);
          this.actives[1].active = true;
        }
      } else if (e.key === 'e') {
        if (this.actives[2].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 2);
          this.actives[2].active = true;
        }
      } else if (e.key === 'r') {
        if (this.actives[3].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 3);
          this.actives[3].active = true;
        }
      } else if (e.key === 't') {
        if (this.actives[4].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 4);
          this.actives[4].active = true;
        }
      } else if (e.key === 'y') {
        if (this.actives[5].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 5);
          this.actives[5].active = true;
        }
      } else if (e.key === 'u') {
        if (this.actives[6].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 6);
          this.actives[6].active = true;
        }
      } else if (e.key === 'i') {
        if (this.actives[7].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 7);
          this.actives[7].active = true;
        }
      } else if (e.key === 'o') {
        if (this.actives[8].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 8);
          this.actives[8].active = true;
        }
      } else if (e.key === 'p') {
        if (this.actives[9].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 9);
          this.actives[9].active = true;
        }
      } else if (e.key === '@') {
        if (this.actives[10].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 10);
          this.actives[10].active = true;
        }
      } else if (e.key === '[') {
        if (this.actives[11].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 11);
          this.actives[11].active = true;
        }
      } else {
        console.log(e.key);
      }
    },
    keyUp(e) {
      if (e.key === 'q') {
        if (this.actives[0].active === true) {
          console.log('up:1');
        }
        this.actives[0].active = false;
      } else if (e.key === 'w') {
        if (this.actives[1].active === true) {
          console.log('up:2');
        }
        this.actives[1].active = false;
      } else if (e.key === 'e') {
        if (this.actives[2].active === true) {
          console.log('up:3');
        }
        this.actives[2].active = false;
      } else if (e.key === 'r') {
        if (this.actives[3].active === true) {
          console.log('up:4');
        }
        this.actives[3].active = false;
      } else if (e.key === 't') {
        if (this.actives[4].active === true) {
          console.log('up:5');
        }
        this.actives[4].active = false;
      } else if (e.key === 'y') {
        if (this.actives[5].active === true) {
          console.log('up:6');
        }
        this.actives[5].active = false;
      } else if (e.key === 'u') {
        if (this.actives[6].active === true) {
          console.log('up:7');
        }
        this.actives[6].active = false;
      } else if (e.key === 'i') {
        if (this.actives[7].active === true) {
          console.log('up:8');
        }
        this.actives[7].active = false;
      } else if (e.key === 'o') {
        if (this.actives[8].active === true) {
          console.log('up:9');
        }
        this.actives[8].active = false;
      } else if (e.key === 'p') {
        if (this.actives[9].active === true) {
          console.log('up:0');
        }
        this.actives[9].active = false;
      } else if (e.key === '@') {
        if (this.actives[10].active === true) {
          console.log('up:-');
        }
        this.actives[10].active = false;
      } else if (e.key === '[') {
        if (this.actives[11].active === true) {
          console.log('up:^');
        }
        this.actives[11].active = false;
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
