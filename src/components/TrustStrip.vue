<script setup>
const promises = [
  { icon: '✳', text: 'Independent & curious' },
  { icon: '♡', text: 'Made for reading together' },
  { icon: '✦', text: 'A little wonder in every story' },
]
</script>

<template>
  <div class="trust-strip"><div class="trust-inner">
    <div class="trust-label">Little books, big love</div>
    <div v-for="promise in promises" :key="promise.text" class="trust-item"><span aria-hidden="true">{{ promise.icon }}</span> {{ promise.text }}</div>
  </div></div>
</template>