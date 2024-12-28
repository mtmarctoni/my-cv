<script setup>
import { personalData } from '../data/personalData.js'
import {SolidityIcon} from '../composables/icons.js'

const { skills } = personalData
const basePath = '/my-cv/icons'

const skillCategories = [
  {
    name: 'Microsoft Power Platform',
    skills: [
      { name: 'Excel', icon: `${basePath}/excel.svg` },
      { name: 'VBA', icon: '/icons/vba.svg' },
      { name: 'Power Query', icon: '/icons/power-query.svg' },
      { name: 'Power BI', icon: '/icons/power-bi.svg' },
      { name: 'Power Apps', icon: '/icons/power-apps.svg' },
      { name: 'Power Automate', icon: '/icons/power-automate.svg' },
    ]
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'JavaScript', icon: `${basePath}/javascript.svg` },
      { name: 'React', icon: `${basePath}/react.svg` },
    ]
  },
  {
    name: 'Blockchain',
    skills: [
      { name: 'Solidity', icon: `${basePath}/solidity.svg` },
    ]
  }
]

</script>

<template>
     <section class="mb-12">
    <h2 class="text-3xl font-bold text-primary mb-8">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="(category, index) in skillCategories" :key="index" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 class="text-xl font-semibold text-secondary mb-4">{{ category.name }}</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="skill in category.skills" :key="skill.name" class="flex flex-col items-center">
            <div class="w-12 h-12 flex items-center justify-center mb-2">
              <img :src="skill.icon" :alt="skill.name" class="max-w-full max-h-full">
            </div>
            <span class="text-sm text-center text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- <section class="mb-8">
        <h2 class="text-2xl font-semibold text-primary mb-4">Skills</h2>
        <div class="flex flex-wrap">
            <span v-for="skill in skills" :key="skill" class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                {{ skill }}
            </span>
        </div>
    </section> -->
</template>