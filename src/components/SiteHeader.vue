<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <nav class="nav-wrap" aria-label="Main navigation">
      <a class="brand" href="#home" aria-label="Little Lantern Press home" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true"><span>✦</span></span> little lantern
      </a>
      <button class="menu-toggle" type="button" :aria-label="menuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        {{ menuOpen ? '×' : '☰' }}
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#books" @click="closeMenu">Our books</a>
        <a href="#about" @click="closeMenu">Our little story</a>
        <a href="#newsletter" @click="closeMenu">Journal</a>
        <a class="nav-cta" href="#books" @click="closeMenu">Find your next read <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  </header>
</template>