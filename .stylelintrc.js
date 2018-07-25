module.exports = {
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        /**
         *! ***************
         *! Possible Errors
         *! ***************
         */
        //* Color
        "color-no-invalid-hex": true,

        //* Font Family
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,

        //* Function
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,

        //* String
        "string-no-newline": true,

        //* Unit
        "unit-no-unknown": true,

        //* Property
        "property-no-unknown": true,

        //* Keyframe Declaration
        "keyframe-declaration-no-important": true,

        //* Declaration Block
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,

        //* Block
        "block-no-empty": true,

        //* Selector
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,

        //* Media Feature
        "media-feature-name-no-unknown": true,

        //* At-Rule
        // "at-rule-no-unknown": true,

        //* Comment
        "comment-no-empty": true,

        //* General / Sheet
        "no-descending-specificity": null,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,

        /**
         *! ***************
         *! Limit Language Features
         *! ***************
         */
        //* Color
        "color-named": "never",

        //* Function
        "function-url-no-scheme-relative": true,

        //* Shorthand Property
        "shorthand-property-no-redundant-values": true,

        //* Value
        "value-no-vendor-prefix": true,

        //* Property
        "property-no-vendor-prefix": true,

        //* Declaration
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-no-important": true,

        //* Declaration Block
        "declaration-block-single-line-max-declarations": 1,

        //* General / Sheet
        "no-unknown-animations": true,

        /**
         *! ***************
         *! Stylistic Issues
         *! ***************
         */
        //* Color
        "color-hex-case": "lower",
        "color-hex-length": "long",

        //* Font Family
        "font-family-name-quotes": "always-where-recommended",

        //* Font Weight
        "font-weight-notation": "numeric",

        //* Function
        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-quotes": ["always", {"except": ["empty"]}],
        "function-whitespace-after": "always",

        //* Number
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,

        //* String
        "string-quotes": "single",

        //* Length
        "length-zero-no-unit": [true, {"ignore": ["custom-properties"]}],

        //* Unit
        "unit-case": "lower",

        //* Value
        "value-keyword-case": ["lower", {ignoreProperties: ["/font/"]}],

        //* Value List
        // "": true,

        //* Custom Property
        // "": true,

        //* Property
        // "": true,

        //* Declaration
        // "": true,

        //* Declaration Block
        // "": true,

        //* Block
        // "": true,

        //* Selector
        // "": true,

        //* Selector List
        // "": true,

        //* Rule
        // "": true,

        //* Media Feature
        // "": true,

        //* Media Query List
        // "": true,

        //* At-Rule
        // "": true,

        //* Comment
        // "": true,

        //* General / Sheet
        // "": true,

    }
}
