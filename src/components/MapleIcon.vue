<template>
    <svg
        class="bi"
        :width="size || width"
        :height="size || height"
        fill="currentColor"
        :style="{ color }"
    >
        <use :xlink:href="`/src/assets/icons/bootstrap-icons.svg#${icon}`" />
    </svg>
</template>

<script lang="ts">
import '@/assets/icons/maple-icons.css';

export default {
    props: {
        width: {
            // 宽度
            type: [Number, String],
            default: 16
        },
        height: {
            // 高度
            type: [Number, String],
            default: 16
        },
        size: {
            // 大小，优先考虑
            type: [Number, String],
            default: 0
        },
        color: {
            // 颜色
            type: String,
            default: '#212529'
        },
        icon: {
            // 图标名
            required: true,
            type: String
        }
    }
};
</script>
