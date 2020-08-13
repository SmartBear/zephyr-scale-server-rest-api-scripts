const axios = require('axios').default;

class Services {
    constructor(jiraUrl, username, password) {
        this.jiraUrl = jiraUrl;
        this.options = {
            auth: {
                username: username,
                password: password
            }
        }
    }

    async healthCheck () {
        try {
            await axios.get(this.jiraUrl + '/rest/atm/1.0/healthcheck', this.options);
            console.log(`The TM4J api is running...`);
        } catch (error) {
            this.printErrorAndExit(error);
        }
    }

    async enableTM4JProject (projectKey) {
        const project = {
            projectKey: projectKey,
            enabled: true
        }
        try {
            await axios.post(this.jiraUrl + '/rest/atm/1.0/project', project, this.options);
            console.log(`The project with key: ${project.projectKey} was created.`);
        } catch (error) {
            this.printErrorAndExit(error);
        }
    }

    async createCustomFields (projectKey, customFields) {
        for (const customField of customFields) {
            await this.createCustomField(projectKey, customField);
        }
    }

    async createCustomField (projectKey, customField){
        customField.projectKey = projectKey;
        try {
            const response = await axios.post(this.jiraUrl + '/rest/atm/1.0/customfield', customField, this.options)
            console.log(`Custom field: ${customField.name} was created with id: ${response.data.id}`);
            customField.id = response.data.id;
            if (customField.customFieldOptions) {
                return this.createCustomFieldOption(customField);
            }
        } catch (error) {
            this.printErrorAndExit(error)
        }
    }

    async createCustomFieldOption (customField) {
        try {
            for (const customFieldOption of customField.customFieldOptions) {
                const response = await axios.post(`${this.jiraUrl}/rest/atm/1.0/customfield/${customField.id}/option`, customFieldOption, this.options)
                console.log(`Custom field option: ${customFieldOption.name} was created with id: ${response.data.id}`);
            }
        } catch (error) {
            this.printErrorAndExit(error)
        }
    }

    printErrorAndExit (error) {
        console.log(`Error code: ${error.code}`)
        console.log(error && error.response && error.response.data
            ? ( `Response status : ${error.response.status} \nResponse message: ${error.response.data.message} ` )
            : ( `Response status : ${error.response.status} \nResponse data: ${error.response.data} ` ))
        process.exit(1)
    }
}

module.exports.Services = Services;