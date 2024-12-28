<script setup>
import { personalData } from '../data/personalData.js'

const education = personalData.education

</script>

<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">Education</h2>
    <div v-for="edu in education" :key="edu.id" class="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 md:w-48 flex flex-col items-center justify-center p-4">
          <div class="w-36 h-36 flex items-center justify-center">
            <img class="max-w-full max-h-full object-contain dark:hidden" 
              :src="edu.img" :alt="edu.university"
            >
            <img class="max-w-full max-h-full object-contain hidden dark:block" 
              :src="edu.imgD" :alt="edu.university"
            >
          </div>
          <p class="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">{{ edu.year }}</p>
        </div>
        <div class="p-6 md:p-8 flex-grow">
          <h3 class="text-xl font-semibold text-secondary mb-2">{{ edu.degree }}</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300">{{ edu.university }}</p>
          <p v-if="edu.description" class="mt-4 text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
          <div v-if="edu.achievements" class="mt-4">
            <h4 class="text-md font-semibold text-primary mb-2">Key Achievements:</h4>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li v-for="(achievement, index) in edu.achievements" :key="index">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">Education</h2>
    <div v-for="edu in education" :key="edu.id" class="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 md:w-48 flex flex-col items-center justify-center p-4">
          <div class="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
            <span class="text-3xl font-bold text-white">{{ edu.university }}</span>
          </div>
          <p class="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">{{ edu.year }}</p>
        </div>
        <div class="p-6 md:p-8 flex-grow">
          <h3 class="text-xl font-semibold text-secondary mb-2">{{ edu.degree }}</h3>
          <p class="text-lg text-gray-700 dark:text-gray-300">{{ edu.university }}</p>
          <p v-if="edu.description" class="mt-4 text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
          <div v-if="edu.achievements" class="mt-4">
            <h4 class="text-md font-semibold text-primary mb-2">Key Achievements:</h4>
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li v-for="(achievement, index) in edu.achievements" :key="index">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section> -->
      <!-- <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">Education</h2>
        <div v-for="edu in education" :key="edu.degree" class="mb-4">
          <h3 class="text-xl font-semibold text-secondary">{{ edu.degree }}</h3>
          <p class="text-text">{{ edu.university }} | {{ edu.year }}</p>
        </div>
      </section> -->
</template>