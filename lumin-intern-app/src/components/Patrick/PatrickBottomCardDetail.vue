<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    position: { type: String },
    company: { type: String },
    description: { type: Array }
})
</script>

<template>
    <div>
        <div className="patrick-bottom-subheader"><strong>{{ position }}</strong>
            <div v-if="company != ''">
                <i>FilExcellence</i>
            </div>
        </div>
        <ul 
            v-for="(text, index) in description"
            :key="index"
        ><li>{{ text }}</li>
        </ul>
    </div>
</template>

<style>
.patrick-bottom-subheader {
    color: #626262 !important;
    font-size: 20px;
    margin-top: 10px;
}

.patrick-list-item {
    margin-top: 10px;
}
</style>