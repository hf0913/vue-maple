<template>
    <button @click="changeType('danger')">
        {{ type }}
    </button>
    <MapleButton :type="type" size="default" outline> 按钮 </MapleButton>
    <MapleButton :type="type" size="default">
        <MapleIcon icon="heart-fill" />
        love
    </MapleButton>
    <MapleButton type="link">Link</MapleButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line newline-after-var
const type = ref('primary');
</script>
