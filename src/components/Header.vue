<template>
  <header>
    <h1><a class="title-link" href="/">3連キーボード</a></h1>
    <button class="setting-btn" type="button"><i class="fa fa-cog mr-2"></i><span></span></button>
    <div id="overlay">
      <div id="modalwindow">
        <p>これがモーダルウィンドウです。</p>
        <p><button>close</button></p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    openModal() {
      this.showContent = true;
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
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
