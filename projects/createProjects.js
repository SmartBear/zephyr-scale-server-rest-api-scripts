const { healthCheck, createProject } = require('../src/services');
const { validateArgs } = require('../src/arguments');
const { projects } = require('./resources/projects');

const run = async () => {
  validateArgs();
  await healthCheck();
  console.log('Creating the TM4J Projects...');

  for (const project of projects) {
    await createProject(project);
  }
};

run().then(() => {
  console.log('TM4J Projects created successfully.');
});
