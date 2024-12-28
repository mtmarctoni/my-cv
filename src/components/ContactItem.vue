<script setup>
import { computed } from 'vue'

const props = defineProps({
    icon: { type: Object, required: true },
    text: { type: String, required: true },
    href: { type: String, default: '' }
})

const isLink = computed(() => !!props.href)
</script>

<template>
    <component :is="isLink ? 'a' : 'p'" 
      :href="isLink ? href : undefined" 
      :target="isLink ? '_blank' : undefined" 
      :rel="isLink ? 'noopener noreferrer' : undefined"
      class="px-4 flex items-center text-text hover:text-secondaryDark transition-colors duration-300">
      <component :is="icon" class="h-5 w-5 mr-2" />
      {{ text }}
    </component>
</template>
  
  