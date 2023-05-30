<template>
  <header ref="fixedRef" class="header">
    <div class="header__left">
      <p class="header__left-logo">Food Deliver</p>
      <div @click="test" class="header__left-btn">
        <div class="switch-button">
          <input class="switch-button-checkbox" type="checkbox" />
          <label class="switch-button-label" for=""
            ><span class="switch-button-label-span">Доставка</span></label
          >
        </div>
      </div>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-list-item">Заклади</li>
        <li class="header__nav-list-item">Доставка і оплата</li>
        <li class="header__nav-list-item">Акції</li>
        <li class="header__nav-list-item">Про нас</li>
      </ul>
    </nav>
    <p class="header__right">
      <a href="tel:+380674519957">+380 67 451 99 57</a>
      <span class="header__right-separator">|</span> 24/7
    </p>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
const fixedRef = ref(null);

const test = () => {
  let checkbox = document.querySelector(".switch-button-checkbox");
  let label = document.querySelector(".switch-button-label-span");
  let switcherBefore = document.querySelector('.switch-button')
  if (checkbox.checked) {
    label.style.color = "#404040";
    switcherBefore.style.color="white"
  } else {
    label.style.color = "white";
    switcherBefore.style.color="#404040"

  }
};

let headerScroll = onMounted(() => {
  let deliveryBtn = document.querySelector(".base-button-delivery__circle");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      fixedRef.value.classList.add("header__background");
      deliveryBtn.classList.add("delivery__btn-bottom");
    } else {
      fixedRef.value.classList.remove("header__background");
      deliveryBtn.classList.remove("delivery__btn-bottom");
    }
  });
});
</script>
