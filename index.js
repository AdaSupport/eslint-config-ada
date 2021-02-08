module.exports = {
  "extends": ["airbnb", "plugin:@typescript-eslint/recommended"],
  "plugins": ["jest", "react-hooks", "jsdoc", "@typescript-eslint", "object-pattern-newline"],
  "settings": {
    "jsdoc": {
      "exemptEmptyFunctions": true,
      "preferredTypes": {
        "boolean": "Boolean",
        "number": "Number",
        "object": "Object",
        "array": "Array",
        "string": "String",
        "function": "Function",
        "reactelement": "ReactElement",
        "Immutable": "Immutable"
      }
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".json", ".ts", ".d.ts", ".tsx", ".svg", ".scss"],
        "paths": ["."]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [ ".ts", ".tsx" ]
    }
  },
  "parser": "babel-eslint",
  "rules": {
    "array-bracket-newline": ["error", "consistent"],
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "camelcase": ["error", { "properties": "never" }],
    "comma-dangle": ["error", "always-multiline"],
    "curly": ["error", "all"],
    "eqeqeq": ["error", "always"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "max-classes-per-file": ["warn", 1],
    "max-lines": ["error", {"max": 1000, "skipBlankLines": true, "skipComments": true}],
    "max-params": ["error", 4],
    "no-alert": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "no-underscore-dangle": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "object-pattern-newline/enforce": ["warn", {
      "items": 3,
      "max-len": 100
    }],
    "operator-linebreak": ["error", "after", { "overrides": {
      "=": "none",
      "?": "before",
      ":": "before"
    } }],
    "padding-line-between-statements": ["error",
      { "blankLine": "always", "prev": "block-like", "next": "*"},
      { "blankLine": "always", "prev": "*", "next": "block-like"},
      { "blankLine": "always", "prev": "*", "next": "return"}
    ],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "sort-imports": ["warn", {
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false
    }],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never"
    }],
     "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "**/*.test.js",
          "**/*.spec.js",
          "webpack.*.js",
        ]
      }
    ],
    "import/extensions": ["error", "never", { "scss": "always", "svg": "always", "json": "always" }],
    "import/no-default-export": "warn",
    "import/no-named-as-default": "off",
    "import/no-unresolved": ["error", { "caseSensitive": false }],
    "import/order": ["warn", {
      "alphabetize": {"order": "asc"},
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always"
    }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": ["error", {}],
    "jsx-a11y/no-access-key": "off",
    "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true }],
    "react/jsx-curly-spacing": ["error", {"when": "never", "children": true}],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-deprecated": ["warn"],
    "react/no-did-update-set-state": "off",
    "react/static-property-placement": ["warn", "static public field"],
    "react/state-in-constructor": ["warn", "never"],

    "require-jsdoc": "off",
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-type": "error",
    "jsdoc/require-returns-type": "error",
    "jsdoc/valid-types": "warn",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/indent": "off"
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "camelcase": "off",
        "no-shadow": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-param-type": "off",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/member-delimiter-style": ["error", {
          "multiline": { "delimiter": "semi", "requireLast": true },
          "singleline": { "delimiter": "semi", "requireLast": false }
        }],
        "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": true }],
        "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": false }],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 1 }],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          { "selector": "variableLike", "format": ["camelCase", "PascalCase", "UPPER_CASE"] },
          { "selector": "parameter", "format": ["camelCase", "PascalCase"] },
          { "selector": "function", "format": ["camelCase", "PascalCase"] }
        ]
      },
      "parser": "@typescript-eslint/parser"
    }
  ],
  "env": {
    "browser": true,
    "jest": true
  }
};

