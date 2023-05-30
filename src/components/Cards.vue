<template>
  <div class="cards">
    <Card v-for="card in cardsData" :data="card" :key="card.iconName" />
  </div>
</template>

<script setup>
import Card from "./parts/Card.vue";

let cardsData = [
  {
    title: "Висока якість продукції",
    iconName: new URL("../assets/img/ic__check.svg", import.meta.url).href,
    className: "first",
    text: "Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.",
  },
  {
    title: "Різноманітність страв",
    iconName: new URL("../assets/img/ic__bowl.svg", import.meta.url).href,
    className: "second",
    text: "Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.",
  },
  {
    title: "Швидка доставка",
    iconName: new URL("../assets/img/ic__rocket.svg", import.meta.url).href,
    className: "third",
    text: "Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.",

  },
  {
    title: "Працюємо цілодобово",
    iconName: new URL("../assets/img/ic__clock.svg", import.meta.url).href,
    className: "fourth",
    text: "Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.",

  },
];
</script>
