<template>
    <MapleCollapse v-model="value" :list="list" type="single" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line newline-after-var
const value = ref(null),
    list = ref([
        {
            title: 'title1',
            key: 1208,
            content: 'content1'
        },
        {
            title: 'title2',
            key: 1209,
            content: 'content2'
        },
        {
            title: 'title3',
            key: 1211,
            content: 'content3'
        }
    ]);
</script>
