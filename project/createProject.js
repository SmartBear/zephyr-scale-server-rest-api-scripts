const { argv } = require('yargs')
const { healthCheck, createTM4JProject } = require('../src/services');
const { validateArgs, JIRA_PROJECT_KEY } = require('../src/arguments')

const ENABLED = argv.tm4jEnabled || true;

const run = async () => {
    validateArgs()
    console.log('Starting to create create a TM4J Project.')
    await healthCheck();
    await createTM4JProject(JIRA_PROJECT_KEY, ENABLED);
}

run().then(() => {
    console.log('TM4J Project created successfully.')
})

