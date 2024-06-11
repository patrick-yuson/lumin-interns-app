<script setup>
import PatrickBottomCardDetail from './PatrickBottomCardDetail.vue'
import { ref, onMounted } from 'vue'

const data = ref([
    {
        position: 'Marketing Intern',
        company: 'FilExcellence',
        description: ['FilExcellence is a 501(c)(3) Non-profit organization dedicated to uplifting and empowering Filipinos around the globe through means of mentorship, fundraising, and event programming',
            'Used Wix Website Editor to increase website traffic from an average of 60 sessions/month to over 1,050/month by completely redesigning their website and accommodating for a new brand direction',
            'Incorporated more engaging elements such as various animations, moving collages, and interactive photos to boost engagement'
        ]
    },
    {
        position: 'ML4VA Project',
        company: '',
        description: ['Trained clustering and regression machine learning models with a team of three using three different datasets to investigate what features could be most attributed to COVID-19-related deaths during the pandemic'],
    },
    {
        position: 'Tutoring Web Application',
        company: '',
        description: ['Assumed the role of DevOps Manager in a team of five and kept track of technologies used throughout a project',
            'Used a Django framework in Python, HTML, and CSS with Bootstrap to implement page structures and UX/UI elements for a student-to-tutor pairing web application and deployed the application using Heroku']
    }
])
</script>

<template>
    <div className="patrick-bottom-card">
        <div className="patrick-header">
            Work & Related Experience
        </div>
        <PatrickBottomCardDetail 
            v-for="endpoint in data"
            :key="endpoint.position"
            :position="endpoint.position"
            :company="endpoint.company"
            :description="endpoint.description"
        />
    </div>
</template>

<style scoped>
.patrick-bottom-card {
    border-radius: 30px;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 540px;
}

.patrick-header {
    color: var(--yellow1);
    font-size: 35px;
    text-align: left;
    margin: 0px;
    font-weight: 600;
}
</style>