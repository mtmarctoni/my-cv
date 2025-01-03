<script setup>
import { computed } from 'vue'

const { personalData } = defineProps(['personalData'])
  
const currentYear = computed(() => new Date().getFullYear())
const { displayName } = personalData.profile
const { myLinkedin, myGitHub} = personalData.socialMedia
const { copyright } = personalData.others
    
</script>

<template>
    <footer class="bg-background py-8 mt-6">
      <div class="container mx-auto px-8 max-w-4xl">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
            © {{ currentYear }} {{displayName}}. {{ copyright }}.
          </p>
          <div class="flex space-x-4">
            <a :href="`https://github.com/${myGitHub}`" target="_blank" rel="noopener noreferrer"
               class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
              <img src="/icons/github-mark-white.svg?url" alt="GitHub" class="w-6 h-6 hidden dark:block" />
              <img src="/icons/github-mark.svg?url" alt="GitHub" class="w-6 h-6 dark:hidden" />
            </a>
            <a :href="`https://linkedin.com/in/${myLinkedin}`" target="_blank" rel="noopener noreferrer"
               class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
              <img src="/icons/linkedin-mark.svg?url" alt="LinkedIn" class="w-7 h-7" />
            </a>
            <!-- another links -->
          </div>
        </div>
      </div>
    </footer>
  </template>
  

  

  
