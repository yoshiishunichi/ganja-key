<template>
  <div>
    <label for="file_upload">
      ファイルを選択してください
      <input id="file_upload" type="file" accept="audio/*" @change="fileChange($event)" />
    </label>
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
      console.log('filechange呼ばれたよ');
      if (e) {
        console.log('ファイルあり');
        this.files = e.target.files;
        // ファイルが選択されたかチェック
        if (this.files.length > 0) {
          const file = this.files[0];
          // ファイルリーダーを使って音声を読み込み
          const reader = new FileReader();
          reader.onload = (e) => {
            // audioDataに格納
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
  width: 180px;
  height: 30px;
  line-height: 30px;
  display: block;
  cursor: pointer;
  background: rgb(50, 150, 220);
  border: solid 1px #aaa;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}

label:hover {
  opacity: 0.8;
}

audio {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 240px;
  height: 40px;
}
</style>
