const axios = require('axios').default;
const { JIRA_URL, USERNAME, PASSWORD } = require('./arguments')

const OPTIONS = {
    auth: {
        username: USERNAME,
        password: PASSWORD
    }
}

async function healthCheck () {
    try {
        await axios.get(JIRA_URL + '/rest/atm/1.0/healthcheck', OPTIONS);
        console.log(`The TM4J api is running...`);
    } catch (error) {
        printErrorAndExit(error);
    }
}

async function createTM4JProject (projectKey, enabled) {
    const project = {
        projectKey: projectKey,
        enabled: enabled
    }
    try {
        await axios.post(JIRA_URL + '/rest/atm/1.0/project', project, OPTIONS);
        console.log(`The project with key: ${project.projectKey} was created.`);
    } catch (error) {
        printErrorAndExit(error);
    }
}

async function createCustomField (projectKey, customField){
    customField.projectKey = projectKey;
    try {
        const response = await axios.post(JIRA_URL + '/rest/atm/1.0/customfield', customField, OPTIONS)
        console.log(`Custom field: ${customField.name} was created with id: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        printErrorAndExit(error)
    }
}

async function createCustomFieldOption (customFieldId, customFieldOption) {
    try {
        const response = await axios.post(`${JIRA_URL}/rest/atm/1.0/customfield/${customFieldId}/option`, customFieldOption, OPTIONS)
        console.log(`Custom field option: ${customFieldOption.name} was created with id: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        printErrorAndExit(error)
    }
}

function printErrorAndExit (error) {
    console.log(`Error code: ${error.code}`)
    console.log(error && error.response && error.response.data
        ? ( `Response status : ${error.response.status} \nResponse message: ${error.response.data.message} ` )
        : ( `Response status : ${error.response.status} \nResponse data: ${error.response.data} ` ))
    process.exit(1);
}

module.exports = {
    healthCheck: healthCheck,
    createTM4JProject: createTM4JProject,
    createCustomField: createCustomField,
    createCustomFieldOption: createCustomFieldOption
}