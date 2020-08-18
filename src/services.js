const axios = require('axios').default;
const { JIRA_URL, USERNAME, PASSWORD } = require('./arguments');

const OPTIONS = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const API_V1 = `${JIRA_URL}/rest/atm/1.0`;

async function healthCheck() {
  try {
    await axios.get(`${API_V1}/healthcheck`, OPTIONS);
    console.log('Running health check...');
  } catch (error) {
    failWith(error);
  }
}

async function createProject(project) {
  try {
    await axios.post(`${API_V1}/project`, project, OPTIONS);
    console.log(`Project with key: ${project.projectKey} was created.`);
  } catch (error) {
    failWith(error);
  }
}

async function createCustomField(customField) {
  try {
    const response = await axios.post(`${API_V1}/customfield`, customField, OPTIONS);
    console.log(
      `Custom field: ${customField.name} was created with id: ${response.data.id} on project ${customField.projectKey}`
    );
    return response.data.id;
  } catch (error) {
    failWith(error);
  }
}

async function createCustomFieldOption(customFieldId, customFieldOption) {
  try {
    const response = await axios.post(
      `${API_V1}/customfield/${customFieldId}/option`,
      customFieldOption,
      OPTIONS
    );
    console.log(
      `Custom field option: ${customFieldOption.name} was created with id: ${response.data.id}`
    );
    return response.data.id;
  } catch (error) {
    failWith(error);
  }
}

function failWith(error) {
  if (error.response) {
    console.log('Response status:', error.response.status);
    if (error.response.data) {
      console.log('Response data:', error.response.data);
    }
  } else {
    console.log('Error message', error.message);
    console.log('Error code', error.code);
  }

  process.exit(1);
}

module.exports = {
  healthCheck: healthCheck,
  createProject: createProject,
  createCustomField: createCustomField,
  createCustomFieldOption: createCustomFieldOption,
};
