<template>
    <a v-if="isLink" :href="href" :class="buttonClass">
      <slot></slot>
    </a>
    <button v-else :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>

<script>
import { computed } from 'vue';

export default {
  props: {
    primary: Boolean,
    secondary: Boolean,
    isLink: Boolean,
    href: String,
  },
  setup(props) {
    const buttonClass = computed(() => ({
      'px-4 py-2 rounded-md': true,
  
    }));

    const handleClick = () => {
      // Handle button click logic here
      console.log('Button clicked');
    };

    return {
      buttonClass,
      handleClick,
    };
  },
};
</script>

  