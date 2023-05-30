<template>
  <div v-card :class="`card card__${data.className} cardBefore`">
    <div class="card__content">
      <p :class="` card__content-title card__content-title-${data.className}`">
        {{ data.title }}
      </p>
      <img :src="data.iconName" />
    </div>
    <div class="card__reverse">
      {{ data.text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
