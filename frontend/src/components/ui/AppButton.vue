<template>
  <router-link :to="link" class="app-button">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: '/'
    },
    text: {
      type: String,
      required: true,
      default: 'Перейти'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';
.app-button {
  background: $red-color;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 500;
  color: $white-color;
}
</style>
