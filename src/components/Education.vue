<script setup>
const { personalData } = defineProps(['personalData'])
const {title, subtitle, educationList, transcriptButton} = personalData.education
</script>

<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">{{title}}</h2>
    <div v-for="edu in educationList" :key="edu.id" class="mb-5 bg-backgroundAlt2 rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 md:w-48 flex flex-col items-center justify-center p-4 md:border-r-2 border-b-2 md:border-b-backgroundAlt2 border-secondaryLight">
          <div class="w-36 h-36 flex items-center justify-center">
            <a :href="edu.link" target="_blank" rel="noopener noreferrer">
              <img class="max-w-full max-h-full object-contain dark:hidden" 
              :src="edu.img" :alt="edu.university"
              >
              <img class="max-w-full max-h-full object-contain hidden dark:block" 
              :src="edu.imgD" :alt="edu.university"
              >
            </a>
          </div>
          <p class="mt-4 text-center text-sm text-textLight">{{ edu.year }}</p>
        </div>
        <div class="p-4 md:px-8 flex-grow text-center md:text-start">
            <h3 class="text-lg font-semibold text-secondary">{{ edu.university }}</h3>
            <div class="text-xl text-primary font-semibold">{{ edu.degree }}</div>
            <p v-if="edu.description" class="mt-2 text-text">{{ edu.description }}</p>
            <div v-if="edu.achievements" class="mt-4">
              <h4 class="text-md font-semibold text-primary mb-2">{{ `${subtitle}:` }}:</h4>
              <ul class="list-disc list-inside text-text">
                <li v-for="(achievement, index) in edu.achievements" :key="index">{{ achievement }}</li>
              </ul>
            </div>
            <div v-if="edu.transcript" class="mt-4">
            <a :href="edu.transcript" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-sm text-primary hover:text-secondaryDark transition-colors duration-300">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              {{ transcriptButton }}
            </a>
          </div>
          </div>
      </div>
    </div>
  </section>
</template>