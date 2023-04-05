<template>
<div class="home-slider">
  <div class="home-slider__wapper">
  </div>
  <swiper
    :spaceBetween="30"
    :loop="true"
    :autoplay="{delay:5000}"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://cdn.shortpixel.ai/spai/w_1900+h_400+ret_img+to_webp+c_center/https://www.thestorefront.com/mag/wp-content/uploads/2020/08/showroomwfurniture-scaled.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://www.modeagentur-kimpfler.de/wp-content/uploads/2021/01/kimpfler-showroom-lodenfrey-02.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://www.modeagentur-kimpfler.de/wp-content/uploads/2021/01/kimpfler-showroom-lodenfrey-04-780x585.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://www.modeagentur-kimpfler.de/wp-content/uploads/2021/01/kimpfler-showroom-hemden-kleiderstaender-780x520.jpg"
    /></swiper-slide>
  </swiper>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css'
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

export default {
  name: 'AppSlider',
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

<style lang="scss">
.home-slider {
  position: relative;
  &__wapper {
    position: absolute;
    z-index: 20;
    background: #0000002e;
    width: 100%;
    height: 100%;
}
}

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
