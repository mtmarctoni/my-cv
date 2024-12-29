<script setup>
import NavBar from './components/NavBar.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

import { personalData } from './data/personalData.js'
import { useDarkMode } from './composables/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
  
const skills = personalData.skills

</script>

<template>
  <div class="min-h-screen bg-backgroundAlt dark:bg-background-alt text-text dark:text-text-light">
    <div class="pt-16">
      <div class="min-h-screen">
        <NavBar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
        <div class="bg-backgroundAlt text-text transition-colors duration-300">
          <div class="container mx-auto p-8 max-w-3xl">

            <Profile />
            <Experience />
            <Education />
            <Skills />
            <!-- <Projects /> -->
             <!-- 
            Certificaciones
            Idiomas
            Otros: hobbies, carnet conducir,...
             -->
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

