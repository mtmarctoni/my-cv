<script setup>
import { personalData } from '../data/personalData.js'

const education = personalData.education

</script>

<template>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">Education</h2>
        <div v-for="edu in education" :key="edu.degree" class="mb-4">
          <h3 class="text-xl font-semibold text-secondary">{{ edu.degree }}</h3>
          <p class="text-text">{{ edu.university }} | {{ edu.year }}</p>
        </div>
      </section>
</template>