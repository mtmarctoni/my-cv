<script setup>
import { personalData } from '../data/personalData.js'

const experience = personalData.experience

</script>

<template>
        <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">Experience</h2>
        <div v-for="job in experience" :key="job.title" class="mb-4">
          <h3 class="text-xl font-semibold text-secondary">{{ job.title }}</h3>
          <p class="text-text">{{ job.company }} | {{ job.period }}</p>
          <ul class="list-disc list-inside text-text mt-2">
            <li v-for="(duty, index) in job.duties" :key="index">
              {{ duty }}
            </li>
          </ul>
        </div>
      </section>
</template>