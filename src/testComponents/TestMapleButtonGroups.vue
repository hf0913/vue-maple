<template>
    <MapleButtonGroups
        :list="list"
        v-model="value"
        click-type="checkbox"
        @on-change="change"
    >
        <template #maple1="{ item }">
            {{ item.label }}
            <MapleIcon icon="heart-fill" />
        </template>
    </MapleButtonGroups>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line newline-after-var
const list = ref([
        {
            value: 'm1',
            label: 'test1',
            slot: 'maple1'
        },
        {
            value: 'm2',
            label: 'test2'
        },
        {
            value: 'm3',
            label: 'test3'
        }
    ]),
    value = ref(null),
    change = (v: object) => console.log(v);
</script>
