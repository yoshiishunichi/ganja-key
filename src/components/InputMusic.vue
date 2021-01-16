<template>
  <div>
    <input id="file_upload" type="file" accept="audio/*" @change="fileChange($event)" />
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
      audioData: '',
    };
  },
  methods: {
    fileChange(e) {
      const files = e.target.files;
      // ファイルが選択されたかチェック
      if (files.length > 0) {
        const file = files[0];
        // ファイルリーダーを使って音声を読み込み
        const reader = new FileReader();
        reader.onload = (e) => {
          // audioDataに格納
          this.audioData = e.target.result;
          this.$emit('audio-serve', this.audioData);
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
audio {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  width: 240px;
  height: 40px;
}
</style>
