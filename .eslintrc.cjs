module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'sort-exports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'import/namespace': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
    'import/order': [
      'error',
      {
        'groups': [['external', 'builtin'], 'internal', ['sibling']],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/components/*',
            group: 'internal',
          },
          {
            pattern: '@/store/*',
            group: 'internal',
          },
        ],
        'pathGroupsExcludedImportTypes': ['internal', 'react'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
