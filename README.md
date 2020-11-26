# Zephyr Scale Server REST API Scripts

Example scripts to automate tasks in Zephyr Scale Server via the [REST API](https://support.smartbear.com/zephyr-scale-server/api-docs/v1/).

The examples are intentionally simple to provide a quick start for REST API users.

We recommend you to fork this repository and change it to meet your specifications.

See the [Zephyr Scale API Docs](https://support.smartbear.com/zephyr-scale-server/api-docs/v1/) for more information about the API usage.

# Requirements

The scripts are based on [Node.js](https://nodejs.org/), please make sure you have the latest Node.js LTS version installed.

After forking or cloning the project, go to the root folder and run the following command to install the dependencies:

```
npm install
```

In the sections below you can see the current available scripts.

## Projects

Zephyr Scale resources are linked to Jira projects, so in order to use Zephyr Scale, first create the projects in Jira and then create the Zephyr Scale projects.

### Create Zephyr Scale Projects

First, open the template file `projects/resources/projects.js` and edit it to meet your requirements.

Then, create the Zephyr Scale projects running the following command:

```
npm run projects:create -- \
  --host https://JIRA_HOST \
  --username JIRA_USERNAME \
  --password JIRA_PASSWORD
```

## Custom Fields

Zephyr Scale supports Custom Fields for different resources, like Test Cases, Test Cycles and more.

### Create Custom Fields

First, open the template file `customFields/resources/customFields.js` and edit it to meet your requirements.

Then, create the Custom Fields running the following command:

```
npm run customFields:create -- \
  --host http://JIRA_HOST \
  --username JIRA_USERNAME \
  --password JIRA_PASSWORD
```
