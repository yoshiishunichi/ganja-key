<template>
  <div>
    <i class="fa mr-2"></i>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    label: { type: String, default: '' },
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
