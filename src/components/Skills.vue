<script setup>
import { data } from '../data/data'
const { personalData } = defineProps(['personalData'])
const { title, subtitle, names } = personalData.skills
const basePath = '/my-cv/icons'
const { skillCategories } = data.skills

</script>

<template>
      <section class="mb-12">
            <h2 class="text-3xl font-bold text-primary mb-8">{{title}}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(category, index) in skillCategories" :key="index" 
                class="bg-backgroundAlt2 rounded-lg shadow-lg p-6">
                <h3 class="text-xl font-semibold text-secondary mb-4">{{ names[index] }}</h3>
                <div class="grid grid-cols-4 md>grid-cols-3 lg:grid-cols-2 gap-3 mb-4">
                    <div v-for="skill in category.skills" :key="skill.name" class="flex flex-col items-center">
                        <div class="w-8 h-8 flex items-center justify-center mb-1">
                            <!-- <img :src="`${basePath}/${skill.icon}`" :alt="skill.name" class="max-w-full max-h-full"> -->
                            <component :is="skill.icon" class="max-w-full max-h-full" />
                    </div>
                    <span class="text-sm text-center text-textLight">{{ skill.name }}</span>
                </div>
                </div>
                <div v-if="category.basicKnowledge" class="mt-4 pt-4 border-t border-secondaryLight">
                <h4 class="text-sm font-semibold text-text mb-2">{{ `${subtitle}:` }}</h4>
                <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.basicKnowledge" :key="skill.name" 
                        class="text-xs bg-backgroundAlt text-textLight px-2 py-1 rounded-full  hover:bg-secondary hover:text-white cursor-default flex items-center">
                        <!-- <img v-if="skill.icon" :src="`${basePath}/${skill.icon}`" :alt="skill.name" class="w-4 h-4 mr-1"> -->
                        <component v-if="skill.icon" :is="skill.icon" class="w-4 h-4 mr-1" />

                    {{ skill.name }}
                    </span>
                </div>
                </div>
            </div>
            </div>
        </section>
</template>