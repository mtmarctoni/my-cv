<script setup>
const {personalData} = defineProps(['personalData'])

const { title, subtitle, button, certificationList } = personalData.certifications
</script>

<template>
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-primary mb-8">{{ title }}</h2>
      <div class="space-y-4">
        <a v-for="cert in certificationList" :key="cert.name"
        :href="cert.link" target="_blank">
        <div class="bg-backgroundAlt2 rounded-lg p-6 flex items-center gap-6 transition-all
                     hover:bg-primaryHover hover:border-l-8 hover:border-l-secondary" >
          <div class="w-16 h-16 flex-shrink-0">
            <img :src="cert.img" :alt="cert.name" class="dark:hidden w-full h-full object-contain">
            <img :src="cert.imgD" :alt="cert.name" class="hidden dark:block w-full h-full object-contain">
          </div>
          <div class="flex-grow">
            <h3 class="text-xl font-semibold text-secondary mb-1">{{ cert.name }}</h3>
            <p class="text-text text-sm">{{ cert.institution }}</p>
            <p v-if="cert.description" class="text-text text-sm mb-2">{{ cert.description }}</p>
          </div>
        </div>
        </a>
      </div>
    </section>
  </template>
  
  

 
  