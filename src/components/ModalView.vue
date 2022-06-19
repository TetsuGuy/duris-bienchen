<template>
  <div class="modal" :class="{ 'is-active': value }">
    <div class="modal-background"></div>

    <div class="modal-content" style="padding: 0.25rem">
      <div class="box"><slot /></div>
    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('input', false)"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
