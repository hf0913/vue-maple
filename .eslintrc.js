module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2021
    },
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-case-declarations': 'off',
        'max-classes-per-file': ['error', 1],
        'max-lines': [
            'error',
            { max: 600, skipBlankLines: false, skipComments: false }
        ],
        'max-nested-callbacks': ['error', 3],
        'max-statements-per-line': ['error', { max: 2 }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'newline-after-var': ['error', 'always'],
        'prettier/prettier': 'off',
        semi: ['error', 'always'],
        'one-var': [
            'error',
            { var: 'never', let: 'consecutive', const: 'consecutive' }
        ],
        'arrow-body-style': [
            'error',
            'as-needed',
            { requireReturnForObjectLiteral: true }
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'space-before-function-paren': 'off',
        'vue/html-self-closing': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-self-closing': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/attributes-order': 'off',
        'vue/singleline-html-element-content-newline': 'off'
    }
};
