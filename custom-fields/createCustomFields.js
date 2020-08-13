const { healthCheck, createCustomField, createCustomFieldOption } = require('../src/services');
const customFields  = require('./resources/customFields');
const { validateArgs, JIRA_PROJECT_KEY } = require('../src/arguments')

const run = async () => {
    validateArgs()
    console.log('Starting to create custom fields.')
    await healthCheck();
    for (const customField of customFields) {
        customField.id = await createCustomField(JIRA_PROJECT_KEY, customField);
        if (customField.customFieldOptions) {
            for (const customFieldOption of customField.customFieldOptions) {
                await createCustomFieldOption(customField.id, customFieldOption);
            }
        }
    }
}

run().then(() => {
    console.log('Custom fields created successfully.')
})

