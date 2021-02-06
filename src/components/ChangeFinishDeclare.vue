<template>
  <h3>{{ changedKey }}に変更完了</h3>
</template>

<script>
export default {
  name: 'ChangeFinishDeclare',
  props: {
    changedKey: { type: String, default: '' },
  },
};
</script>
