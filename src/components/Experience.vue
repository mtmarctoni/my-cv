<script setup>
import {ref} from 'vue'
const { personalData } = defineProps(['personalData'])
const {title, subtitle, dropdown, jobList} = personalData.experience
const jobListShow = ref(jobList.map(job => ({ ...job, showDuties: false })))

const toggleDuties = (jobId) => {
  const job = jobListShow.value.find(job => job.id === jobId)
  if (job) {
    job.showDuties = !job.showDuties
  }
    
}
</script>

<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">{{ title }}</h2>
    <div v-for="job in jobListShow" :key="job.id" class="mb-5 bg-backgroundAlt2 rounded-lg shadow-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 md:w-48 flex flex-col items-center md:border-r-2 border-b-2 md:border-b-backgroundAlt2 border-secondaryLight">
          <div class="w-64 md:w-36 h-36 flex items-center justify-center">
            <a :href="job.link" target="_blank" rel="noopener noreferrer">
            <img class="max-w-full max-h-full object-contain dark:hidden" 
            :src="job.img" :alt="job.company">
                <img class="max-w-full max-h-full object-contain hidden dark:block" 
                :src="job.imgD" :alt="job.company">
              </a>
          </div>
          <p class="p-4 px-8 text-center text-sm text-gray-500">{{ job.period }} </p>
          <p class="px-6 pb-4 text-center text-sm text-textDark">{{ job.city }}</p>
        </div>
        <div class="py-4 px-8 flex-grow text-center md:text-left content-center">
          <div class="uppercase tracking-wide text-sm text-secondary font-semibold">{{ job.company }}</div>
          <h3 class="mt-1 text-2xl leading-tight font-medium text-primary">{{ job.title }}</h3>
          <p v-if="job.description" class="mt-4 text-text">{{ job.description }}</p>
          
          <!-- Dropdown for duties -->
          <div>
            <button @click="toggleDuties(job.id)" class="text-primary hover:text-secondaryDark transition-colors duration-300">
              {{ job.showDuties ?  dropdown[0] : dropdown[1] }}
            </button>
            <ul v-if="job.showDuties" class="list-disc list-inside mt-2 text-text">
              <li v-for="(duty, index) in job.duties" :key="index" class="flex items-start">
                <svg class="h-6 w-6 text-accent2 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-text text-start">{{ duty }}</span>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>