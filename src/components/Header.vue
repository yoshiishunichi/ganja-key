<template>
  <header>
    <h1><a class="title-link" href="/">3連キーボード</a></h1>
    <p><a class="setting-link">設定</a></p>
  </header>
</template>

<script>
export default {
  name: 'Header',
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

p {
  text-align: right;
  float: right;
  color: #eee;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
  font-weight: bold;
}

.title-link {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.setting-link {
  color: #ccc;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  opacity: 0.8;
}
</style>
