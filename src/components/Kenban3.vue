<template>
  <div class="frame">
    <div class="key">
      <div class="white-key" :class="{ actW: actives[0].active }"><p>A</p></div>
      <div class="black-key" :class="{ actB: actives[1].active }"><p>S</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[2].active }"><p>D</p></div>
      <div class="black-key" :class="{ actB: actives[3].active }"><p>F</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[4].active }"><p>G</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[5].active }"><p>H</p></div>
      <div class="black-key" :class="{ actB: actives[6].active }"><p>J</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[7].active }"><p>K</p></div>
      <div class="black-key" :class="{ actB: actives[8].active }"><p>L</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[9].active }"><p>+</p></div>
      <div class="black-key" :class="{ actB: actives[10].active }"><p>*</p></div>
    </div>
    <div class="key">
      <div class="white-key" :class="{ actW: actives[11].active }"><p>]</p></div>
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
      if (e.key === 'a') {
        if (this.actives[0].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 12);
          this.actives[0].active = true;
        }
      } else if (e.key === 's') {
        if (this.actives[1].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 13);
          this.actives[1].active = true;
        }
      } else if (e.key === 'd') {
        if (this.actives[2].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 14);
          this.actives[2].active = true;
        }
      } else if (e.key === 'f') {
        if (this.actives[3].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 15);
          this.actives[3].active = true;
        }
      } else if (e.key === 'g') {
        if (this.actives[4].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 16);
          this.actives[4].active = true;
        }
      } else if (e.key === 'h') {
        if (this.actives[5].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 17);
          this.actives[5].active = true;
        }
      } else if (e.key === 'j') {
        if (this.actives[6].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 18);
          this.actives[6].active = true;
        }
      } else if (e.key === 'k') {
        if (this.actives[7].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 19);
          this.actives[7].active = true;
        }
      } else if (e.key === 'l') {
        if (this.actives[8].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 20);
          this.actives[8].active = true;
        }
      } else if (e.key === ';') {
        if (this.actives[9].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 21);
          this.actives[9].active = true;
        }
      } else if (e.key === ':') {
        if (this.actives[10].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 22);
          this.actives[10].active = true;
        }
      } else if (e.key === ']') {
        if (this.actives[11].active === false && !this.openingView) {
          console.log(e.key);
          this.play(this.do, 23);
          this.actives[11].active = true;
        }
      } else {
        console.log(e.key);
      }
    },
    keyUp(e) {
      if (e.key === 'a') {
        if (this.actives[0].active === true) {
          console.log('up:1');
        }
        this.actives[0].active = false;
      } else if (e.key === 's') {
        if (this.actives[1].active === true) {
          console.log('up:2');
        }
        this.actives[1].active = false;
      } else if (e.key === 'd') {
        if (this.actives[2].active === true) {
          console.log('up:3');
        }
        this.actives[2].active = false;
      } else if (e.key === 'f') {
        if (this.actives[3].active === true) {
          console.log('up:4');
        }
        this.actives[3].active = false;
      } else if (e.key === 'g') {
        if (this.actives[4].active === true) {
          console.log('up:5');
        }
        this.actives[4].active = false;
      } else if (e.key === 'h') {
        if (this.actives[5].active === true) {
          console.log('up:6');
        }
        this.actives[5].active = false;
      } else if (e.key === 'j') {
        if (this.actives[6].active === true) {
          console.log('up:7');
        }
        this.actives[6].active = false;
      } else if (e.key === 'k') {
        if (this.actives[7].active === true) {
          console.log('up:8');
        }
        this.actives[7].active = false;
      } else if (e.key === 'l') {
        if (this.actives[8].active === true) {
          console.log('up:9');
        }
        this.actives[8].active = false;
      } else if (e.key === ';') {
        if (this.actives[9].active === true) {
          console.log('up:0');
        }
        this.actives[9].active = false;
      } else if (e.key === ':') {
        if (this.actives[10].active === true) {
          console.log('up:-');
        }
        this.actives[10].active = false;
      } else if (e.key === ']') {
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
