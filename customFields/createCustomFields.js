const { healthCheck, createCustomField, createCustomFieldOption } = require('../src/services');
const { validateArgs } = require('../src/arguments');
const { customFields } = require('./resources/customFields');

const run = async () => {
  validateArgs();
  await healthCheck();
  console.log('Creating custom fields...');

  for (const customField of customFields) {
    customField.id = await createCustomField(customField);
    if (customField.customFieldOptions) {
      for (const customFieldOption of customField.customFieldOptions) {
        await createCustomFieldOption(customField.id, customFieldOption);
      }
    }
  }
};

run().then(() => {
  console.log('Custom fields created successfully.');
});
