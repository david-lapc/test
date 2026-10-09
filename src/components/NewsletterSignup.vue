<script setup>
import { ref } from 'vue'

const email = ref('')
const submittedEmail = ref('')

function subscribe() {
  submittedEmail.value = email.value
  email.value = ''
}
</script>

<template>
  <section id="newsletter" class="newsletter">
    <div class="eyebrow"><span class="spark" aria-hidden="true">✳</span> Postcards from the storybook world</div>
    <h2>A little wonder, delivered.</h2>
    <p>New books, cozy reading ideas, and the occasional bookish doodle. Just the good stuff.</p>
    <form class="signup-form" @submit.prevent="subscribe">
      <label class="visually-hidden" for="newsletter-email">Your email address</label>
      <input id="newsletter-email" v-model="email" type="email" placeholder="Your email address" autocomplete="email" required />
      <button type="submit">Count me in <span aria-hidden="true">→</span></button>
    </form>
    <p class="form-message" aria-live="polite">
      {{ submittedEmail ? `You're on the list! Keep an eye on ${submittedEmail} for a little wonder.` : 'A happy little note, never spam. Unsubscribe anytime.' }}
    </p>
  </section>
</template>