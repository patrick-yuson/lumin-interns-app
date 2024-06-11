<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    author: { type: String },
    message: { type: String }
})
</script>

<template>
    <div className="patrick-message">
        <p className="patrick-message-author">{{ author }}</p>
        <div className="patrick-message-blob">
            <div className="patrick-message-content">{{ message }}</div>
        </div>
    </div>
</template>

<style scoped>
@import '../../styles/ColorPalette.css';

.patrick-message-author {
    margin-bottom: 10px;
    font-weight: 600;
}

.patrick-message-blob {
    border-radius: 20px;
    background-color: #c6c6c6 !important;
    padding: 12px;
}

.patrick-message-content {
    color: var(--black3);
}
</style>