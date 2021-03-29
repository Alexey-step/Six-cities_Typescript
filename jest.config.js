
module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": `identity-obj-proxy`
  },
  setupFilesAfterEnv: [
    `<rootDir>/setup-tests.js`
  ],
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `json`
  ],
};
