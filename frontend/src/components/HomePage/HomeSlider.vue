<template>
  <swiper
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    class="mySwiper container"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectFade, Navigation, Pagination]
    }
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  max-height: 794px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
