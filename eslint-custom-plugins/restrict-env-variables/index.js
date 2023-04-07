const noPrivateEnvVariables = require('./no-private-env-variables');

module.exports = {
  rules: {
    'no-private-env-variables': noPrivateEnvVariables,
  },
};
