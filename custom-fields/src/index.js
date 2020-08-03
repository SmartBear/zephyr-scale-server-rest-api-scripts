const { argv } = require('yargs')
const { Services } = require('./services');
const customFields  = require('./customFields');

const JIRA_PROJECT_KEY = argv.projectKey;
const JIRA_URL = argv.host;
const USERNAME = argv.username;
const PASSWORD = argv.password;

const init = async () => {
    validate()
    console.log('Starting to create custom fields.')
    const services = new Services(JIRA_URL, USERNAME, PASSWORD)
    await services.healthCheck();
    await services.enableTM4JProject(JIRA_PROJECT_KEY);
    await services.createCustomFields(JIRA_PROJECT_KEY, customFields);
}

const validate = () => {
    if (!argv.projectKey) {
        print('projectKey')
    }
    if (!argv.host) {
        print('host')
    }
    if (!argv.username) {
        print('username')
    }
    if (!argv.password) {
        print('password')
    }
}

const print = (parameter) => {
    console.log(`${parameter} is required`);
    console.log('Try to run the following command replacing the CAPITALIZE parameters: \n' +
        'npm create --host http://YOUR_JIRA_HOST --projectKey KEY --username USERNAME --password PASSWORD')
    process.exit(1)
}

init().then(() => {
    console.log('Custom fields created successfully.')
})

