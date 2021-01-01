<template>
  <div class="keybord">
    <div class="key">
      <div class="white_key"></div>
      <div class="brack_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
      <div class="brack_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
      <div class="brack_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
      <div class="brack_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
      <div class="brack_key"></div>
    </div>
    <div class="key">
      <div class="white_key"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kenban',
};
</script>

<style scoped>
.keybord {
  display: block;
  width: 420px;
  height: 250px;
}
.key {
  position: relative;
  width: 60px;
  height: 250px;
  float: left;
}

/*BEGIN brack_key*/
.brack_key {
  display: block;
  position: absolute;
  top: 0px;
  left: 35px;
  border-radius: 0 0 10px 10px;
  background-color: #000000;
  width: 50px;
  height: 125px;
  z-index: 100;
}
.brack_key:after {
  content: '';
  position: absolute;
  left: 9px;
  top: 0px;
  background: rgb(255, 255, 25);
  border-radius: 0 0 12px 12px;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(30, 30, 30));
  background-image: -ms-linear-gradient(rgb(0, 0, 0), rgb(30, 30, 30));
  background-image: -webkit-linear-gradient(rgb(0, 0, 0), rgb(30, 30, 30));
  background-image: -moz-linear-gradient(rgb(0, 0, 0), rgb(30, 30, 30));
  background-image: -o-linear-gradient(rgb(0, 0, 0), rgb(30, 30, 30));
  box-shadow: 0px -1px 2px 0px rgb(50, 50, 50) inset;
  width: 32px;
  height: 108px;
}
.brack_key:hover:after {
  height: 112px;
}
/*END brack_key*/

/*BEGIN white_key*/
.white_key {
  display: block;
  position: absolute;
  top: 0px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 3px 0px rgb(211, 211, 211);
  border: 2px solid #b3b3b3;
  border-top: none;
  width: 58px;
  height: 230px;
}
.white_key:hover {
  top: 0px;
  background-color: #e6e6e6;
  box-shadow: none;
  height: 233px;
}
/*END white_key*/
</style>
