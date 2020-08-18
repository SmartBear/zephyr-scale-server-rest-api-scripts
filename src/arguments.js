const { argv } = require('yargs');

const JIRA_URL = argv.host;
const USERNAME = argv.username;
const PASSWORD = argv.password;

const validateArgs = () => {
  if (!argv.host) {
    logMissingRequiredParameterAndExitWithError('host');
  }
  if (!argv.username) {
    logMissingRequiredParameterAndExitWithError('username');
  }
  if (!argv.password) {
    logMissingRequiredParameterAndExitWithError('password');
  }
};

const logMissingRequiredParameterAndExitWithError = (parameter) => {
  console.log(`${parameter} is required`);
  console.log(
    'Try again with the following command replacing the CAPITALIZED parameters: \n' +
      ' --host http://YOUR_JIRA_HOST --username USERNAME --password PASSWORD'
  );
  process.exit(1);
};

module.exports = {
  validateArgs: validateArgs,
  JIRA_URL: JIRA_URL,
  USERNAME: USERNAME,
  PASSWORD: PASSWORD,
};
