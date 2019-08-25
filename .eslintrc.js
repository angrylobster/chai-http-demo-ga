module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: 'always',
                ObjectPattern: { multiline: true },
                ImportDeclaration: 'never',
                ExportDeclaration: { multiline: true, minProperties: 3 }
            }
        ]
    }
};
