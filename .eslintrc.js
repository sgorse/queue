module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'no-unused-vars': [
      'error',
      { args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-console': ['warn'],
    'arrow-body-style': ['off'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'route'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
}
