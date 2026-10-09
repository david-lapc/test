<script setup>
defineProps({ book: { type: Object, required: true } })
</script>

<template>
  <article class="book-card">
    <a :href="book.href" :aria-label="`Discover ${book.title}`">
      <div class="mini-cover" :class="book.coverClass">
        <div class="mini-title">
          <template v-for="(line, index) in book.coverTitle" :key="line">
            <span>{{ line }}</span><br v-if="index < book.coverTitle.length - 1" />
          </template>
        </div>
        <div class="mini-art" aria-hidden="true">{{ book.art }}</div>
        <div class="mini-author">{{ book.coverCaption }}</div>
      </div>
    </a>
    <div class="book-meta"><span>{{ book.category }}</span><span>{{ book.age }}</span></div>
    <h3>{{ book.title }}</h3>
    <p>{{ book.credits }}</p>
  </article>
</template>