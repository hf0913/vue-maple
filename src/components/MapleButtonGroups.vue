<!--按钮组-->
<template>
    <div class="btn-group">
        <template v-for="(item, index) of list" :key="item.value">
            <input
                :type="clickType"
                class="btn-check"
                :id="`maple-check-${item.value}`"
                autocomplete="off"
                :checked="
                    clickType === 'checkbox'
                        ? value.includes(item.value)
                        : value === item.value
                "
                @change="change($event.target.checked, item.value, index)"
            />
            <label
                class="btn"
                :class="myClass"
                :for="`maple-check-${item.value}`"
            >
                <slot :name="item.slot" :item="item" :index="index">
                    {{ item.label }}
                </slot>
            </label>
        </template>
    </div>
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
import { getType } from '@/utils/check';
import publicProps from '@/utils/props/button';
import { getButtonClass } from '@/utils/setup/getClass';

export default {
    props: {
        list: {
            // 列表
            required: true,
            type: Array
        },
        modelValue: {
            // 绑定值
            required: true,
            validator(value: any) {
                return getType(value) !== 'object';
            }
        },
        clickType: {
            // 点击类型
            validator(value: string) {
                return ['radio', 'checkbox'].includes(value);
            },
            default: 'radio'
        },
        ...publicProps
    },
    setup(props, { emit }) {
        const { list, modelValue, clickType }: any = toRefs(props),
            { myClass } = getButtonClass({
                toRefs,
                computed,
                props
            }),
            value = computed(() => {
                switch (true) {
                    case modelValue.value == null:
                        break;
                    case clickType.value === 'checkbox' &&
                        getType(modelValue.value) !== 'array':
                        throw new Error(
                            'When the clickType is checkbox, modelValue must be Array type'
                        );
                    case clickType.value === 'radio' &&
                        getType(modelValue.value) === 'array':
                        throw new Error(
                            'When the clickType is radio, modelValue must be Number or String or null or undefined'
                        );
                }
                return (
                    modelValue.value ??
                    (clickType.value === 'checkbox' ? [] : null)
                );
            }),
            change = (v: boolean, k: string, index: number) => {
                let d;

                switch (true) {
                    case clickType.value === 'checkbox':
                        d = v
                            ? value.value.concat([k])
                            : value.value.filter((item: any) => item !== k);
                        break;
                    default:
                        d = v ? k : list.value[0].value;
                }
                emit('update:model-value', d);
                emit('on-change', { value: d, index });
            };

        return { myClass, change, getType, value };
    }
};
</script>
