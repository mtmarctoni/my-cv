<script setup>
const { personalData } = defineProps(['personalData'])

const { title, subtitle, languages } = personalData.others

</script>

<template>
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-primary mb-8">{{subtitle}}</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="lang in languages" :key="lang.name" 
                class="hover:text-black hover:bg-secondaryLight cursor-default
                        flex items-center text-xs bg-backgroundAlt2 text-text px-3 py-1.5 rounded-full"           >   
            <img :src="lang.flag" :alt="lang.name" class="w-4 h-4 mr-2">
            <span class="font-medium">{{ lang.name }}</span>
            <span class="mx-1">•</span>
            <span class="text-textLight">{{ lang.level }}</span>
          </span>
        </div>
    </section>
  </template>