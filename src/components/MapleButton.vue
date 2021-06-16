<!--按钮-->
<template>
    <button type="button" class="btn" :class="myClass" :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
import publicProps from '@/utils/props/button';
import { getButtonClass } from '@/utils/setup/getClass';

export default {
    props: {
        underline: {
            // 文本是否需要下划线
            type: Boolean
        },
        ...publicProps
    },
    setup(props) {
        const { myClass } = getButtonClass({
            toRefs,
            computed,
            props,
            hasUnderlineProps: true
        });

        return { myClass };
    }
};
</script>
