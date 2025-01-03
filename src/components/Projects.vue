<script setup>
const { personalData } = defineProps(['personalData'])
const { title, subtitle, projectList } = personalData.projects
</script>
<template>
     <section class="mb-12">
            <h2 class="text-3xl font-bold text-primary mb-8">{{title}}</h2>
            <div class="space-y-8">
            <div v-for="(project, index) in projectList" :key="project.id" 
                class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div class="md:flex" :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
                <div class="md:w-1/2">
                    <img :src="project.img" :alt="project.name" class="w-full h-full object-cover">
                </div>
                <div class="md:w-1/2 p-6">
                    <h3 class="text-2xl font-semibold text-secondary mb-2">{{ project.name }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
                    <div class="mb-4">
                    <h4 class="text-sm font-semibold text-primary mb-2">{{`${subtitle}:`}}</h4>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tech in project.technologies" :key="tech" 
                            class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                                    px-2 py-1 rounded-full hover:bg-primary hover:text-white 
                                    dark:hover:bg-primary dark:hover:text-white transition-colors duration-200">
                        {{ tech }}
                        </span>
                    </div>
                    </div>
                    <div v-if="project.githubLink" class="mt-4">
                    <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" 
                        class="text-primary hover:text-primary-dark dark:text-primary-light dark:hover:text-primary 
                                transition-colors duration-200">
                        View on GitHub
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
  </template>
  
  