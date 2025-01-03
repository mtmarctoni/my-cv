import { ref, computed } from 'vue'
import { personalDataEN } from '../data/personalDataEN.js'
import { personalDataES } from '../data/personalDataES.js'

export function useLanguage() {
  const currentLanguage = ref(localStorage.getItem('preferredLanguage') || 'en')

  const personalData = computed(() => 
    currentLanguage.value === 'en' ? personalDataEN : personalDataES
  )    

  const changeLanguage = (newLanguage) => {
    currentLanguage.value = newLanguage
    localStorage.setItem('preferredLanguage', newLanguage)
  }
    
  return {
    currentLanguage,
    personalData,
    changeLanguage
  }
}
