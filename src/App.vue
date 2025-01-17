<script setup>
import NavBar from './components/NavBar.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Others from './components/Others.vue'
import Footer from './components/Footer.vue'

import { useDarkMode } from './composables/useDarkMode'
import { useLanguage } from './composables/useLanguage'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const { currentLanguage, personalData, changeLanguage } = useLanguage()

</script>

<!-- pass peronalData as props and aupdate very component 
  add the language component into the nav bar and pass the prop to the app
-->

<template>
  <div :key="currentLanguage">
    <div class="min-h-screen bg-backgroundAlt text-textLight  transition-colors duration-300">
      <div class="pt-16">
        <div class="min-h-screen max-w-4xl mx-auto">
          <NavBar 
            :personalData="personalData" 
            :isDarkMode="isDarkMode" 
            @toggle-dark-mode="toggleDarkMode"
            :current-language="currentLanguage"
            @language-changed="changeLanguage"
          />
          <div class="bg-backgroundAlt text-tex transition-colors duration-300">
            <div class="container p-8">

              <Profile :personalData="personalData" />
              <Skills :personalData="personalData"/>
              <Experience :personalData="personalData"/>
              <Education :personalData="personalData"/>
              <Certifications :personalData="personalData"/>
              <Others :personalData="personalData"/>

              <!-- <Projects /> -->
              <!-- 
              Certificaciones
              Idiomas
              Otros: hobbies, carnet conducir,...
              -->
              
            </div>
          </div>
        </div>
        <Footer :personalData="personalData"/>
      </div>
    </div>
  </div>
</template>

