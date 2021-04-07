<template>
  <a :href="link" :class="classes">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
      default: '#',
    },
    classes: {
      type: String,
      default: 'btn',
    },
  },
}
</script>

<style scoped>
.btn {
  display: inline-block;
  line-height: 49px;
  padding: 0 25px;
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: 1px solid var(--primary-color);
  transition: var(--transition);
  text-decoration: none;
}

.btn svg {
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: -0.15rem;
}

.btn:hover {
  background-color: var(--white-color);
  color: var(--primary-color);
}

.btn.big {
  line-height: 79px;
  padding: 0 35px;
  font-size: 1.3rem;
}

.btn.outline {
  border: 1px solid var(--white-color);
}
</style>
