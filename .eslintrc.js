module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended', //Don't allow unused variables
  ],
  plugins: ['prettier', '@typescript-eslint', 'react-native', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    // TypeScript Specific Rules
    '@typescript-eslint/explicit-function-return-type': 'off', // Allow inferred return types
    '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type
    '@typescript-eslint/no-unused-vars': 'error', // Enforce removing unused variables
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred return types for exported functions
    '@typescript-eslint/no-var-requires': 'off', // Allow 'require' statements
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],

    // React and JSX Rules
    'react/jsx-uses-react': 1, // Checks whether the React object is used in JSX
    'arrow-body-style': ['error'], // Arrow functions style
    'require/react-in-jsx-scope': 'off', //Usage of React when writing JSX

    // Import Rules
    // 'import/order': 'error', // Enforce a consistent import order

    //Hooks rules
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // JSDoc and Comments
    'require-jsdoc': 'off', //Enable it if we have to do documentation

    // Code Formatting Rules
    'jsx-quotes': [2, 'prefer-single'], //Used for jsx-quotes
    quotes: [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}], //double quotes are not allowed
    indent: ['error', 2], // Indent JSX with 2 spaces
    'react/jsx-indent-props': ['error', 2], // Indent props with 2 spaces
    'no-console': ['error', {allow: ['warn', 'error']}], //No console logs are allowed

    // Additional React Native Rules
    'react/prop-types': ['error'], //Wrong prop types errors
    'max-lines': ['error', {max: 350}], //Max lines
    'react-native/no-inline-styles': 'error', //Don't allow inline styles
    'react-native/no-unused-styles': 'error', //Don't allow unused styles
    'react/jsx-props-no-spreading': 'off', // Allow spreading props with {...props}
    'react/jsx-uses-vars': 'error', // Detect variables used in JSX but not in scope
  },
  settings: {
    react: {
      version: 'detect', // or specify a specific version like "16.8.0"
    },
  },
};
