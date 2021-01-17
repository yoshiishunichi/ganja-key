<template>
  <div>
    <label for="file_upload">
      ファイルを選択してください
      <input id="file_upload" type="file" accept="audio/*" @change="fileChange($event)" />
    </label>
    <p v-if="audioData" class="sample">〜サンプル〜</p>
    <audio v-if="audioData" controls :src="audioData">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
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
  methods: {
    fileChange(e) {
      if (e) {
        this.files = e.target.files;
        if (this.files.length > 0) {
          const file = this.files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            this.audioData = e.target.result;
            this.$emit('audio-serve', this.audioData);
          };
          reader.readAsDataURL(file);
        } else {
          this.audioData = '';
          this.$emit('audio-serve', this.audioData);
        }
      } else {
        this.audioData = '';
        this.files = null;
        this.$emit('audio-serve', this.audioData);
      }
    },
  },
};
</script>

<style scoped>
label > input {
  display: none;
}

label {
  user-select: none;
  width: 180px;
  height: 30px;
  line-height: 30px;
  display: block;
  cursor: pointer;
  background: white;
  border: solid 3px rgb(255, 208, 21);
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
  color: rgb(255, 208, 21);
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}

label:hover {
  opacity: 0.8;
}

.sample {
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
  width: 240px;
  height: 40px;
  border: 2px solid rgb(255, 208, 21);
  border-radius: 20px;
}
</style>
