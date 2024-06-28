const path = require('path');

module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
    url: 'http://localhost/'
  },
  moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1'
  },
}
