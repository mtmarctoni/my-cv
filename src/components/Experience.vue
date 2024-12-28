<script setup>
import { personalData } from '../data/personalData.js'

const sectionTitle = 'Work Experience'

const experience = personalData.experience

</script>

<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">{{ sectionTitle }}</h2>
    <div v-for="job in experience" :key="job.id" class="mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 md:w-48 flex flex-col items-center">
          <div class="w-64 md:w-36 h-36 flex items-center justify-center">
            <img class="max-w-full max-h-full object-contain dark:hidden" :src="job.img" :alt="job.company">
            <img class="max-w-full max-h-full object-contain hidden dark:block" :src="job.imgD" :alt="job.company">
          </div>
          <p class="p-4 text-left text-sm text-gray-500">{{ job.period }} </p>
          <p class="px-4 text-left text-sm text-textDark">{{ job.city }}</p>
        </div>
        <div class="py-4 px-8 flex-grow">
          <div class="uppercase tracking-wide text-sm text-secondary font-semibold">{{ job.company }}</div>
          <h3 class="mt-1 text-2xl leading-tight font-medium text-primary">{{ job.title }}</h3>
          <p v-if="job.description" class="mt-4 text-gray-600 dark:text-gray-300">{{ job.description }}</p>
          <ul class="mt-4 space-y-2">
            <li v-for="(duty, index) in job.duties" :key="index" class="flex items-start">
              <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700 dark:text-gray-200">{{ duty }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="mb-8">
    <h2 class="text-2xl font-semibold text-primary mb-4">{{ sectionTitle }}</h2>
    <div v-for="job in experience" :key="job.title" class="mb-4">
      <h3 class="text-xl font-semibold text-secondary">{{ job.title }}</h3>
      <p class="text-text">{{ job.company }} | {{ job.period }}</p>
      <ul class="list-disc list-inside text-text mt-2">
        <li v-for="(duty, index) in job.duties" :key="index">
          {{ duty }}
        </li>
      </ul>
    </div>
  </section> -->
</template>