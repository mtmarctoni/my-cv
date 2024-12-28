import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(false)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    updateDarkMode()
  }

  const updateDarkMode = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    isDarkMode.value = savedDarkMode === 'true'
    updateDarkMode()
  })

  watch(isDarkMode, updateDarkMode)

  return {
    isDarkMode,
    toggleDarkMode
  }
}
