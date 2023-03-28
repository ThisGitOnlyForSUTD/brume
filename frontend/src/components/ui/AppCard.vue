<template>
  <div class="card">
    <span v-if="lableType" class="card__lable" :style="[lableType === 'hit' ? {'background-color': '#d6928b'} : '']">
      {{ lableType }}
    </span>
    <img src="https://static.bershka.net/4/photos2/2023/V/1/2/p/2416/160/001/0833f4c54776523526b5a89df0023398-2416160001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic" alt="" class="card__img">
    <span class="card__name">Lorem, ipsum dolor.</span>
    <span class="card__price">1000p</span>
    <button class="card__button">Добавить</button>
  </div>
</template>

<script>
export default {
  props: {
    lableType: {
      type: String,
      required: false,
      defult: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/vars.scss';
.card {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  cursor: pointer;
  position: relative;

  &__name {
    padding: 7px 0;
  }
  &__button {
    margin-top: 10px;
    background: $red-color;
    padding: 5px;
    text-transform: uppercase;
    font-weight: 500;
    color: $white-color;
  }

  &__price {
    font-weight: 600;
  }
  &__lable {
    color: $white-color;
    text-transform: uppercase;
    font-weight: 600;
    background: $blue-color;
    padding: 2px 8px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
