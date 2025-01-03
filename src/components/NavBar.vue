<script setup>
import LanguageSwitcher from './LanguageSwitcher.vue'
import DarkModeToggle from './DarkModeToggle.vue';
const { personalData, isDarkMode, currentLanguage } = defineProps(['personalData', 'isDarkMode', 'current-language'])
const { displayName } = personalData.profile
defineEmits(['language-changed', 'toggle-dark-mode'])
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-background shadow-md z-50">
      <div class="container px-8 py-3 flex justify-between items-center max-w-4xl mx-auto">
      <div class="text-xl font-bold text-primary">{{ displayName }} CV</div>
      <div class="flex items-center space-x-4">
        <!-- <a href="#" class="text-text dark:text-text-light hover:text-primary dark:hover:text-primary-light">Home</a> -->
        <a href="/my-cv/transcripts/CV_MarcToniMas.pdf" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-sm text-primary hover:text-secondaryDark transition-colors duration-300">
              Download CV
        </a>
        
        <LanguageSwitcher 
          :current-language="currentLanguage" 
          @language-changed="$emit('language-changed', $event)" 
        />
        <DarkModeToggle 
          :is-dark-mode="isDarkMode" 
          @toggle-dark-mode="$emit('toggle-dark-mode')"
        />
    </div>
    </div>
  </nav>
</template>