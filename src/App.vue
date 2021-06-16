<template>
    <div style="padding: 10px">
        <TestMapleButton />
        <TestMapleIcon />
        <TestMapleButtonGroups />
        <TestMapleCollapse />
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import TestMapleButton from './testComponents/TestMapleButton.vue';
import TestMapleIcon from './testComponents/TestMapleIcon.vue';
import TestMapleButtonGroups from './testComponents/TestMapleButtonGroups.vue';
import TestMapleCollapse from './testComponents/TestMapleCollapse.vue';

defineComponent({
    TestMapleButton,
    TestMapleIcon,
    TestMapleButtonGroups,
    TestMapleCollapse
});
</script>
