<template>
  <header>
    <h1><a class="title-link" href="/">3連キーボード</a></h1>
    <button class="setting-btn" type="button"><i class="fa fa-cog mr-2"></i><span></span></button>
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
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  font-size: 14px;
  line-height: 14px;
  margin-right: 20px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 25px;
  outline: none;
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
  color: #eee;
}
</style>
