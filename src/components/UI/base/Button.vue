<template>
   <button
     @click.stop="handleClick"
     :disabled="disabled"
     :type="nativeType"
     :class="[
       'base-button',
       `base-button-${styleClass}`,
     ]"
   >
     <template v-if="$slots.default"><slot></slot></template>
   </button>
 </template>
 
 <script setup>

 const props = defineProps({
   styleClass: {
     type: String,
     default: "",
   },
   nativeType: {
     type: String,
     default: "button",
   },
   disabled: {
     type: Boolean,
     default: false,
   },
 });
 
 </script>
 