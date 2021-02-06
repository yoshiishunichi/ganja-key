<template>
  <h3 class="change-title">{{ changedKey }}に変更完了</h3>
</template>

<script>
export default {
  name: 'ChangeFinishDeclare',
  props: {
    changedKey: { type: String, default: '' },
  },
};
</script>

<style scoped>
.change-title {
  font-size: 17px;
  padding-top: 20px;
  color: white;
  user-select: none;
}
</style>
