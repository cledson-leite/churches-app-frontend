module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1'
  },
};
