module.exports = {
    defaultSeverity: 'warning',
    extends: 'stylelint-config-sass-guidelines',
    rules: {
        'declaration-property-value-blacklist': null,
        indentation: [4, { ignore: 'value' }],
        'max-nesting-depth': null,
        'function-parentheses-space-inside': 'never-single-line',

        //! Make sure this actually works... othewise just get rid of it.
        // "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
        'selector-class-pattern': null,

        'selector-max-compound-selectors': null,
        //! I would prefer not to have this but vuetify does use some tag selectors. :(
        'selector-no-qualifying-type': null,

        'scss/at-mixin-pattern': null,

        // ---- FROM OLD .stylelintrc.js ----
        //* Function
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,

        //* Font Family
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,

        //* String
        'string-no-newline': true,

        //* Unit
        'unit-no-unknown': true,

        //* Keyframe Declaration
        'keyframe-declaration-no-important': true,

        //* Declaration Block
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,

        //* Selector
        'selector-pseudo-class-no-unknown': true,
        'selector-type-no-unknown': true,

        //* Media Feature
        'media-feature-name-no-unknown': true,

        //* Comment
        'comment-no-empty': true,

        //* General / Sheet
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        //* Function
        'function-url-no-scheme-relative': true,

        //* Declaration
        'declaration-block-no-redundant-longhand-properties': true,

        //* General / Sheet
        'no-unknown-animations': true,

        //* Color
        'color-hex-length': 'long',

        //* Function
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-url-quotes': ['always', { except: ['empty'] }],
        'function-whitespace-after': 'always',
    },
};
