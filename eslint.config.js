import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  {
    files: ['packages/iframe-inspector/test/**/*.ts'],
    rules: {
      'virtual-dom/no-inline-event-handlers': 'off',
      'virtual-dom/no-object-attribute-values': 'off',
      'virtual-dom/prefer-constants': 'off',
      'virtual-dom/prefer-merge-class-names': 'off',
      'virtual-dom/prefer-state-destructuring': 'off',
    },
  },
]
