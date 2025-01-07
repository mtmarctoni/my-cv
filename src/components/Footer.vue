<script setup>
import { computed } from 'vue'
import { ghIcon, LinkedInIcon } from '../composables/icons'

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
              <component :is="ghIcon" class="w-6 h-6"/>
            </a>
            <a :href="`https://linkedin.com/in/${myLinkedin}`" target="_blank" rel="noopener noreferrer"
               class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
              <component :is="LinkedInIcon" class="w-6 h-6"/>
            </a>
            <!-- another links -->
          </div>
        </div>
      </div>
    </footer>
  </template>
  

  

  
