<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { SpanishIcon, EnglishIcon } from '../composables/icons'

const props = defineProps(['currentLanguage'])
const emit = defineEmits(['language-changed'])

const isOpen = ref(false)
const languages = ['en', 'es']
const dropdownRef = ref(null)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectLanguage = (lang) => {
    emit('language-changed', lang)
    isOpen.value = false
}

const getFlagIcon = (lang) => {
  if (lang === 'en') return EnglishIcon
  if (lang === 'es') return SpanishIcon
}
  

// const getFlagSrc = (lang) => {
//     return `/my-cv/icons/${lang === 'en' ? 'english' : 'spain'}-flag.svg`
// }

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
<div class="language-switcher relative" ref="dropdownRef">
    <button @click="toggleDropdown" class="bg-backgroundAlt text-text hover:bg-secondaryLight hover:text-black transition-colors duration-300 rounded px-2 py-1 flex items-center">
    <!-- <img :src="getFlagSrc(currentLanguage)" :alt="currentLanguage" class="w-5 h-5 mr-2"> -->
    <component :is="getFlagIcon(currentLanguage)" class="w-5 h-5 mr-2"/>
    {{ currentLanguage.toUpperCase() }}
    </button>
    <ul v-if="isOpen" class="absolute top-full left-0 mt-1 bg-background border border-secondary rounded shadow-lg">
    <li v-for="lang in languages" :key="lang" @click="selectLanguage(lang)" class="text-text hover:text-black px-2 py-1 hover:bg-secondaryLight transition-colors duration-300 cursor-pointer flex items-center">
        <!-- <img :src="getFlagSrc(lang)" :alt="lang" class="w-5 h-5 mr-2"> -->
      <component :is="getFlagIcon(lang)" class="w-5 h-5 mr-2"/>
        {{ lang.toUpperCase() }}
    </li>
    </ul>
</div>
</template>