<template>
    <section class="delivery">
    <img class="delivery__left" src="@/assets/img/background.jpg" />
    <Button :styleClass="'delivery__circle'">Замовити доставку</Button>
    <div class="delivery__info">
      <h1 class="delivery__info-title">Доставка готової їжі в Кієві</h1>
      <p class="delivery__info-desc">
        Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь
        смачними стравами без необхідності готувати самостійно.
      </p>
    </div>
  </section>
</template>
<script setup>
import Button from "@/components/UI/base/Button.vue";
</script>