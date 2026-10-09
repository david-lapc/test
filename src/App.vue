<script setup>
import AnnouncementBar from './components/AnnouncementBar.vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TrustStrip from './components/TrustStrip.vue'
import BookShelf from './components/BookShelf.vue'
import AboutSection from './components/AboutSection.vue'
import NewsletterSignup from './components/NewsletterSignup.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <AnnouncementBar />
  <SiteHeader />
  <main>
    <HeroSection />
    <TrustStrip />
    <BookShelf />
    <AboutSection />
    <NewsletterSignup />
  </main>
  <SiteFooter />
</template>