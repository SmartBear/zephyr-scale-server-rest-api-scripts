const { argv } = require('yargs')
const { Services } = require('./services');
const customFields  = require('./customFields');

const JIRA_PROJECT_KEY = argv.projectKey;
const JIRA_URL = argv.host;
const USERNAME = argv.username;
const PASSWORD = argv.password;

const init = async () => {
    console.log('Starting to create custom fields.')
    const services = new Services(JIRA_URL, USERNAME, PASSWORD)
    await services.healthCheck();
    await services.enableTM4JProject(JIRA_PROJECT_KEY);
    await services.createCustomFields(JIRA_PROJECT_KEY, customFields);
}

init().then(() => {
    console.log('Custom fields created successfully.')
})

