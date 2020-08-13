const { argv } = require('yargs')

const JIRA_PROJECT_KEY = argv.projectKey;
const JIRA_URL = argv.host;
const USERNAME = argv.username;
const PASSWORD = argv.password;

const validateArgs = () => {
    if (!argv.projectKey) {
        logMissingRequiredParameterAndExitWithError('projectKey')
    }
    if (!argv.host) {
        logMissingRequiredParameterAndExitWithError('host')
    }
    if (!argv.username) {
        logMissingRequiredParameterAndExitWithError('username')
    }
    if (!argv.password) {
        logMissingRequiredParameterAndExitWithError('password')
    }
}

const logMissingRequiredParameterAndExitWithError = (parameter) => {
    console.log(`${parameter} is required`);
    console.log('Try to run the following command replacing the CAPITALIZED parameters: \n' +
        ' --host http://YOUR_JIRA_HOST --projectKey KEY --username USERNAME --password PASSWORD')
    process.exit(1)
}


module.exports = {
    validateArgs: validateArgs,
    JIRA_URL: JIRA_URL,
    JIRA_PROJECT_KEY: JIRA_PROJECT_KEY,
    USERNAME: USERNAME,
    PASSWORD: PASSWORD
};