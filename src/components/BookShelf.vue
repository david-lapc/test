<script setup>
import BookCard from './BookCard.vue'

const books = [
  { title: "The Cloud That Couldn't Sit Still", coverTitle: ['The Cloud That', "Couldn't Sit Still"], art: '☁️', coverCaption: 'A story about big feelings', category: 'Feelings & friendship', age: 'Ages 3–6', credits: 'By Rosie Wren · Illustrated by Ada Bloom', coverClass: 'cover-lilac', href: '#home' },
  { title: "Little Blue's Big Day", coverTitle: ["Little Blue's", 'Big Day'], art: '🐳', coverCaption: 'A splashy little adventure', category: 'Bravery & new things', age: 'Ages 2–5', credits: 'By Finn Harper · Illustrated by Jo Park', coverClass: 'cover-blue', href: '#newsletter' },
  { title: 'The Garden Under My Bed', coverTitle: ['The Garden', 'Under My Bed'], art: '🌼', coverCaption: 'Where wild ideas grow', category: 'Imagination & nature', age: 'Ages 4–8', credits: 'By Maya Fern · Illustrated by Kit Sol', coverClass: 'cover-yellow', href: '#newsletter' },
  { title: 'Goodnight, Little City', coverTitle: ['Goodnight,', 'Little City'], art: '🌙', coverCaption: 'A cozy city lullaby', category: 'Bedtime & belonging', age: 'Ages 2–6', credits: 'By Nell Rivers · Illustrated by Luca Day', coverClass: 'cover-pink', href: '#newsletter' },
]
</script>

<template>
  <section id="books" class="section"><div class="section-inner">
    <div class="section-heading">
      <div><div class="eyebrow"><span class="spark" aria-hidden="true">✳</span> The story shelf</div><h2>Small books. Big adventures.</h2></div>
      <p>From first giggles to last goodnights, find a new favorite for your little reader.</p>
    </div>
    <div class="books-grid"><BookCard v-for="book in books" :key="book.title" :book="book" /></div>
  </div></section>
</template>