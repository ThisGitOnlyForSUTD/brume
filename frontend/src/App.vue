<template>
  <component :is="`${layout}-layout`" v-if="layout"/>
</template>

<script>
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import { computed } from 'vue'
export default {
  setup () {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  },
  components: {
    MainLayout,
    AuthLayout
  }
}
</script>
