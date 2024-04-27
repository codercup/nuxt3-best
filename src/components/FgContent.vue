<template>
  <div class="h-10 leading-10" v-for="item in line">
    this is line {{ item }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  line: {
    type: Number,
    default: 20,
  },
})
</script>
