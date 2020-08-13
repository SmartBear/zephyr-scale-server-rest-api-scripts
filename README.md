# TM4J Server Scripts #

This repository contains scripts to automate some tasks related to TM4J Server via public API. Those scripts are executed by 
[NodeJs](https://nodejs.org/). Each subdirectory as the instructions in their readme file to manipulate some resources.

After that you cloned the project you must go to the root folder of the project and run the following command to install the dependencies. 
```
npm install
```
## Project ##

You can create a TM4J project using this tool.

### Create TM4J Project ###
Fist of all you need to create a Jira project and then your are able to create a TM4J project running the following command:
```
npm run project:create -- --host http://YOUR_HOST --projectKey PROJECT_KEY --username USERNAME --password PASSWORD
```

If everything is fine the message `TM4J Project created successfully.` will be printed at the end of the process.


## Custom Fields ##

You can create custom fields fast and easily following the next steps.

### Create custom fields ###


To create our own customs fields you need to edit the file `custom-fields/resources/customFields.js` to create your own custom fields. 
Look at the [TM4J api docs](https://support.smartbear.com/tm4j-server/api-docs/v1/) for more information.

Then run the following command adjusting the arguments

```
npm run customfields:create -- --host http://YOUR_HOST --projectKey PROJECT_KEY --username USERNAME --password PASSWORD
```

If everything is fine the message `Custom fields created successfully.` will be printed at the end of the process: 






