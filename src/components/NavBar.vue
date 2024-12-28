<script setup>
import { personalData } from '../data/personalData.js'

const { displayName } = personalData.profile
defineProps(['isDarkMode'])
defineEmits(['toggle-dark-mode'])
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 bg-background dark:bg-background-alt shadow-md z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold text-primary dark:text-primary-light">{{ displayName }}</div>
        <div class="flex items-center space-x-4">
          <!-- <a href="#" class="text-text dark:text-text-light hover:text-primary dark:hover:text-primary-light">Home</a> -->
      <button @click="$emit('toggle-dark-mode')" class="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      </div>
      </div>

    </nav>
  </template>
  
  

<!-- <template>
    <nav class="fixed top-0 left-0 right-0 bg-background dark:bg-background-alt shadow-md z-50">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold text-primary dark:text-primary-light">Your Name</div>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-text dark:text-text-light hover:text-primary dark:hover:text-primary-light">Home</a>
          <a href="#" class="text-text dark:text-text-light hover:text-primary dark:hover:text-primary-light">About</a>
          <a href="#" class="text-text dark:text-text-light hover:text-primary dark:hover:text-primary-light">Contact</a>
          <button @click="toggleDarkMode" class="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const isDarkMode = ref(false)
  


const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', isDarkMode.value)
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})


  </script>
   -->