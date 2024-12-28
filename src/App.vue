<script setup>
import { ref, onMounted, watch } from 'vue'

import NavBar from './components/NavBar.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'

import { personalData } from './data/personalData.js'
import { useDarkMode } from './composables/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
  
const name = `${personalData.profile.firstName} ${personalData.profile.lastName}`
const title = personalData.profile.title
const email = personalData.profile.email
const phone = personalData.profile.phone
const location = personalData.profile.location
const summary = personalData.profile.summary
const experience = personalData.experience
const education = personalData.education
const skills = personalData.skills

</script>

<template>
  <div class="min-h-screen bg-background dark:bg-background-alt text-text dark:text-text-light">
    <NavBar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
    <div class="pt-16">
      <div class="min-h-screen">
        <div class="bg-background text-text transition-colors duration-300">
          <div class="container mx-auto p-8 max-w-3xl">
      
            <header class="mb-8">
              <h1 class="text-4xl font-bold text-primary">{{ name }}</h1>
              <p class="text-xl text-secondary">{{ title }}</p>
            </header>

            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <p class="text-text">Email: {{ email }}</p>
              <p class="text-text">Phone: {{ phone }}</p>
              <p class="text-text">Location: {{ location }}</p>
            </section>

            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-primary mb-4">Summary</h2>
              <p class="text-text">{{ summary }}</p>
            </section>

            <Experience />
            <Education />

            <section class="mb-8">
              <h2 class="text-2xl font-semibold text-primary mb-4">Skills</h2>
              <div class="flex flex-wrap">
                <span v-for="skill in skills" :key="skill" class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                  {{ skill }}
                </span>
              </div>
            </section>

            <Footer />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

