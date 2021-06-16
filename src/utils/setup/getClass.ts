export const getButtonClass = ({
    props,
    toRefs,
    computed,
    hasUnderlineProps = false
}) => {
    // 按钮与按钮组件公共计算公共class setup
    const { type, size, outline, underline }: any = toRefs(props),
        myClass = computed(() => [
            {
                'text-decoration-none':
                    hasUnderlineProps && underline.value === false
            },
            `btn-${size.value}`,
            `btn-${outline.value ? 'outline-' : ''}${type.value}`
        ]);

    return { myClass };
};
