module.exports = {
  "extends": ["airbnb", "plugin:@typescript-eslint/recommended"],
  "plugins": ["jest", "react-hooks", "jsdoc", "@typescript-eslint"],
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
        "moduleDirectory": ["node_modules", "source", "static"],
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
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "comma-dangle": ["error", "never"],
    "curly": ["error", "all"],
    "eqeqeq": ["error", "always"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
    "max-lines": ["error", {"max": 1200, "skipBlankLines": true, "skipComments": true}],
    "max-params": ["error", 4],
    "no-alert": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-underscore-dangle": ["error", { "allow": ["_id", "_type", "_env", "__env"] }],
    "no-use-before-define": "error",
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
          "webpack.config.js",
          "webpack-docker.config.js"
        ]
      }
    ],
    "import/no-named-as-default": "off",
    "import/no-unresolved": ["error", { "caseSensitive": false }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": ["error", {}],
    "jsx-a11y/no-access-key": "off",
    "react/destructuring-assignment": ["error", "always", { "ignoreClassFields": true }],
    "react/jsx-curly-spacing": ["error", {"when": "never", "children": true}],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }],
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-param-type": "error",
    "jsdoc/require-returns-type": "error",
    "jsdoc/valid-types": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/indent": "off"
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off",
        "no-use-before-define": "off",
        "require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "@typescript-eslint/no-explicit-any": ["error", { "ignoreRestArgs": false }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 1 }],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true
          }
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/type-annotation-spacing": "error"
      },
      "parser": "@typescript-eslint/parser"
    }
  ],
  "env": {
    "browser": true,
    "jest": true
  }
};

