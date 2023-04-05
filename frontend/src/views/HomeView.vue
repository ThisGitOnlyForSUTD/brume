<template>
  <div class="home">
    <app-slider class="home__slider"/>
    <div class="container">
      <section class="home-positions">
      <promo-card :img="'man'" :text="'Мужское'" />
      <promo-card :img="'wumen'" :text="'Женское'" />
    </section>
    <section class="home-hit">
      <h2 class="home-hit__title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#d6928b" height="28" viewBox="0 96 960 960" width="28">
          <path d="M220 656q0 63 28.5 118.5T328 867q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T740 656q0-54-23-105.5T651 456q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T420 342v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T220 656Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T551 750l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622 398l18-22q74 42 117 117t43 163q0 134-93 227t-227 93q-134 0-227-93t-93-227q0-128 86-246.5T480 216Z"/>
        </svg>
        Хиты продаж
      </h2>
      <div class="home-hit__list">
        <app-card v-for="item in products" :key="item.id" :lable-type="'hit'"/>
      </div>
    </section>
    <section class="home-new">
      <h2 class="home-new__title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#6eaed4" height="28" viewBox="0 96 960 960" width="28">
          <path d="m393 891 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400 976h-80Zm153-395Z"/>
        </svg>
        Новинки
      </h2>
      <div class="home-new__list">
        <div v-for="item in products" :key="item.id">
        <app-card :product="item" :lable-type="'new'"/>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import AppSlider from '@/components/ui/AppSlider.vue'
import AppCard from '@/components/ui/AppCard.vue'
import PromoCard from '../components/ui/PromoCard.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'HomeView',
  components: {
    AppSlider,
    AppCard,
    PromoCard
  },
  setup () {
    const store = useStore()
    const products = computed(() => store.getters['products/PRODUCTS'])
    console.log(products)
    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';
.home {

  &-positions {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    gap: 20px;
    &__link {
      background: $grey-color;
      position: relative;

      &:hover {
        background: #000;
      }
    }

    &__button {
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
      background: $red-color;
      padding: 10px 20px;
      text-transform: uppercase;
      font-weight: 500;
      color: $white-color;
      white-space: nowrap;
      z-index: 1;
    }

    &__img {
      flex-basis: 80%;
      height: 500px;
    }
  }

  &-hit, &-new {
    margin: 0 auto;
    width: 100%;
    &__title {
      font-size: 25px;
      margin-top: 60px;
    }
    &__list {
      margin: 20px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 0 30px;
    }
  }
}
</style>
