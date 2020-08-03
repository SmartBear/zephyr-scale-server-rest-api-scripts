# Create custom fields #

First of all it's necessary to install the library dependencies. Run the following command to do that: 

```
npm install
```

Edit the file `customFields.js` to create your owns custom fields. Look at the [TM4J api docs](https://support.smartbear.com/tm4j-server/api-docs/v1/) for more information.

Run the following command adjusting the necessary info.
```
npm create --host http://YOUR_JIRA_HOST --projectKey KEY --username JIRA_USERNAME --password JIRA_PASSWORD
```

If everything is fine the message `Custom fields created successfully.` will be printed at the end of the process: 
