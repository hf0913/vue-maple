export default {
    // 按钮与按钮组件公共props
    outline: {
        // 是否需要轮廓线
        type: Boolean
    },
    disabled: {
        // 是否禁用
        type: Boolean
    },
    type: {
        // 按钮样式类型
        validator(value: string) {
            return [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
                'link'
            ].includes(value);
        },
        default: 'primary'
    },
    size: {
        // 按钮尺寸
        validator(value: string) {
            return ['sm', 'lg', 'default'].includes(value);
        },
        default: 'default'
    }
};
