import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
    {
        files: ['src/**/*.js'],
        languageOptions: {
            globals: {
                ...globals.node,
                process: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'error',
            'no-unused-expressions': 'error',
            'prefer-const': 'error',
            'no-undef': 'error'
        },
        ignores: ['node_modules', 'dist']
    },
    js.configs.recommended,
    eslintConfigPrettier
];
