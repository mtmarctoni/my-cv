<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

const getFlagSrc = (lang) => {
    return `/my-cv/icons/${lang === 'en' ? 'english' : 'spain'}-flag.svg`
}

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
    <button @click="toggleDropdown" class="bg-backgroundAlt text-text border border-background hover:border-secondaryLight rounded px-2 py-1 flex items-center">
    <img :src="getFlagSrc(currentLanguage)" :alt="currentLanguage" class="w-5 h-5 mr-2">
    {{ currentLanguage.toUpperCase() }}
    </button>
    <ul v-if="isOpen" class="absolute top-full left-0 mt-1 bg-background border border-secondary rounded shadow-lg">
    <li v-for="lang in languages" :key="lang" @click="selectLanguage(lang)" class="px-2 py-1 hover:bg-backgroundAlt cursor-pointer flex items-center">
        <img :src="getFlagSrc(lang)" :alt="lang" class="w-5 h-5 mr-2">
        {{ lang.toUpperCase() }}
    </li>
    </ul>
</div>
</template>