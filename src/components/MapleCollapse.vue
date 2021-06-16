<!--折叠手风琴-->
<template>
    <div class="accordion">
        <div class="accordion-item" v-for="item of list" :key="item.key">
            <button
                class="accordion-button btn-sm"
                @click="changeAccordion(item)"
                :class="{
                    collapsed: !(
                        collapse[item.key] && collapse[item.key].collapsed
                    )
                }"
            >
                <slot name="title">{{ item.title }}</slot>
            </button>
            <div
                class="accordion-collapse"
                :class="collapse[item.key] && collapse[item.key].class"
            >
                <div class="accordion-body">
                    <slot name="content">{{ item.content }}</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, toRefs } from 'vue';
import { getType } from '@/utils/check';

export default {
    props: {
        modelValue: {
            // 双向绑定值
            required: true,
            validator(value: any) {
                return getType(value) !== 'object';
            }
        },
        list: {
            // 选项列表
            required: true,
            type: Array
        },
        type: {
            // 交互类型
            validator(value: string) {
                return ['single', 'multiple'].includes(value);
            },
            default: 'single'
        }
    },
    setup(props, { emit }) {
        const { modelValue, list, type }: any = toRefs(props),
            collapse: any = computed({
                set(v) {
                    emit('update:model-value', v);
                    emit('on-change', v);
                },
                get() {
                    const d: any = {},
                        isArray =
                            type.value === 'multiple' &&
                            getType(modelValue.value) === 'array';
                    let bl = false;

                    switch (true) {
                        case modelValue.value == null:
                            break;
                        case type.value === 'multiple' &&
                            getType(modelValue.value) !== 'array':
                            throw new Error(
                                'When the type is multiple, modelValue must be Array type'
                            );
                        case type.value === 'single' &&
                            getType(modelValue.value) === 'array':
                            throw new Error(
                                'When the type is single, modelValue must be Number or String or null or undefined'
                            );
                    }

                    for (const { key } of list.value.values()) {
                        bl = isArray
                            ? modelValue.value.includes(key + '')
                            : modelValue.value === key + '';
                        d[key] = {
                            collapsed: bl,
                            class: {
                                collapse: true,
                                show: bl,
                                'collapse-hide': false,
                                'collapse-show': bl
                            }
                        };
                    }
                    return d;
                }
            }),
            changeAccordion = (item: any) => {
                const d = new Set();

                for (const [key, value] of Object.entries(collapse.value)) {
                    // if ((value as any).collapsed) d.add(key);
                    if ((<any>value).collapsed) d.add(key);
                }
                if (type.value === 'multiple') {
                    d.has(item.key + '')
                        ? d.delete(item.key + '')
                        : d.add(item.key + '');
                    collapse.value = [...d];
                } else {
                    d.has(item.key + '')
                        ? (collapse.value = null)
                        : (collapse.value = item.key + '');
                }
            };

        return {
            collapse,
            changeAccordion
        };
    }
};
</script>

<style lang="scss" scoped>
.collapse-show {
    max-height: 300px;
    transition: max-height 1s ease;
}
.collapse-hide {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease !important;
}
</style>
