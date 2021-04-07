<template>
  <img
    src="../assets/logo.png"
    :alt="alt"
    :style="`max-height: ${maxHeight}px;`"
  />
</template>

<script>
export default {
  name: 'Logo',
  props: {
    maxHeight: {
      type: String,
      default: '70',
    },
    alt: {
      type: String,
      default: 'Logo',
    },
  },
}
</script>

<style scoped></style>
