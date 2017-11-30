module.exports = {
    parserOptions: {
        "ecmaVersion": 2017
    },
    extends: './eslintrc.google.js',
    env: {
        es6: true,
    },
    rules: {
        'semi': [1, 'never'],
        'no-undef': 2,
        'new-cap': 0,
        'curly': 0,
        'valid-jsdoc': 0,
        'brace-style': 0,
        'block-spacing': 1,
        'space-before-function-paren': [0, {"anonymous": "never"}],
        'linebreak-style': 2,
        'padded-blocks': [0, 'never'],
        'quotes': 0,
        'key-spacing': 0,
        'comma-style': [2, 'last'],
        'comma-dangle': 0,
        'indent': [0, 4],
        'max-len': 0,
        'require-jsdoc': 0,
        'arrow-parens': 0,
        'no-multi-spaces': 0,
    },
    globals: {
        // $: true,
        _: true,
        rdfstore: true,
        FormData: true,
        Backbone: true,
        document: true,
        require: true,
        define: true,
        console: true,
        window: true,
        process: true,
        module: true,
        Image: true,
        exports: true,
        parent: true,
        setTimeout: true,
        setInterval: true,
        clearTimeout: true,
        clearInterval: true,
        __dirname: true,
        GM_registerMenuCommand: true,
        __filename: true,
        Buffer: true,
        fetch: true,
    },
}
