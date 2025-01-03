<script setup>
import { EmailIcon, PhoneIcon, LocationIcon, WorkIcon, ghIcon, LinkedInIcon } from '../composables/icons.js';

import ContactItem from './ContactItem.vue'

const { personalData } = defineProps(['personalData'])

const { firstName, lastName, position, email, phone, location, summary, title, titleSummary } = personalData.profile
const name = `${firstName} ${lastName}`
const { myLinkedin, myGitHub } = personalData.socialMedia
const linkedinLink = `https://www.linkedin.com/in/${myLinkedin}`
const githubLink = `https://github.com/${myGitHub}`
</script>

<template>
    <header class="mb-8">
        <h1 class="text-4xl font-bold text-primary text-center">{{ name }}</h1>
        <p class="text-xl text-secondary font-semibold text-center">{{ position }}</p>

        <div class="flex flex-col md:flex-row items-center md:items-center mt-6">
            <div class="w-full md:w-1/2 md:order-2 flex justify-center mb-8 md:mb-0">
                <div class="w-64 h-64 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                    <img src="/media/profile-picture.jpeg" alt="Profile Picture" class="w-full h-full object-cover">
                </div>
            </div>

            <section class="w-full md:w-1/2 md:order-1 md:pr-8">
                <h2 class="text-2xl font-semibold text-primary mb-4">{{title}}</h2>
                <div class="space-y-2 justify-items-center md:justify-items-start">
                    <ContactItem 
                        class="bg-accent2 rounded-lg py-2" 
                        :icon="WorkIcon" text="Open to work" 
                    />
                    <ContactItem :icon="EmailIcon" :text="email" :href="`mailto:${email}`" />
                    <ContactItem :icon="PhoneIcon" :text="phone" />
                    <ContactItem :icon="LocationIcon" :text="location" />
                    <ContactItem :icon="ghIcon" :text="`@${myGitHub}`" :href="githubLink" />
                    <ContactItem :icon="LinkedInIcon" text="Connect on LinkedIn" :href="linkedinLink" />
                </div>
            </section>
        </div>
        <section class="mb-8 mt-8">
            <h2 class="text-2xl font-semibold text-primary mb-4">{{titleSummary}}</h2>
            <p class="text-text">{{ summary }}</p>
        </section>
    </header>
</template>