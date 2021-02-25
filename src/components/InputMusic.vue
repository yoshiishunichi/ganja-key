<template>
  <div>
    <label for="file_upload" class="choice-file">
      ファイルを選択してください
      <input id="file_upload" type="file" accept="audio/*" @change="fileChange($event)" />
    </label>
    <p v-if="audioData" class="sample">〜サンプル〜</p>
    <audio v-if="audioData" controls :src="audioData">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <button v-if="audioData" @click="deleteAudio">選択したファイルをキャンセル</button>
  </div>
</template>

<script>
export default {
  name: 'InputMusic',
  data() {
    return {
      files: null,
      audioData: '',
    };
  },
  mounted() {
    this.audioData = localStorage.audio;
    this.$emit('audio-serve', this.audioData);
  },
  methods: {
    deleteAudio() {
      this.audioData = '';
      this.$emit('audio-serve', this.audioData);
      localStorage.audio = this.audioData;
      this.files = null;
      document.getElementById('file_upload').value = '';
    },
    fileChange(e) {
      if (e) {
        this.files = e.target.files;
        if (this.files.length > 0) {
          const file = this.files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            this.audioData = e.target.result;
            this.$emit('audio-serve', this.audioData);
            localStorage.audio = this.audioData;
          };
          reader.readAsDataURL(file);
        } else {
          this.audioData = '';
          this.$emit('audio-serve', this.audioData);
          localStorage.audio = this.audioData;
        }
      } else {
        this.audioData = '';
        this.files = null;
        this.$emit('audio-serve', this.audioData);
        localStorage.audio = this.audioData;
      }
    },
  },
};
</script>

<style scoped>
label > input {
  display: none;
}

.choice-file {
  user-select: none;
  max-width: 400px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: block;
  cursor: pointer;
  background: white;
  border: solid 3px rgb(50, 70, 120);
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
  color: rgb(50, 70, 120);
  font-weight: bold;
  text-align: center;
  margin: 10px auto;
}

.choice-file:hover {
  opacity: 0.8;
}

p {
  text-align: center;
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: bold;
  user-select: none;
}

audio {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 240px;
  height: 40px;
  border: 2px solid rgb(50, 70, 120);
  border-radius: 20px;
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
  display: block;
}

button:hover {
  opacity: 0.8;
}
</style>
