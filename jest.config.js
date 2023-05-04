module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  // coverageProvider: "babel",
  coverageReporters: [
    "html",
  ],
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@src/.*": "<rootDir>/app/javascript/src/$1",
    "@tests/.*": "<rootDir>/app/javascript/tests/$1",
  }
};
