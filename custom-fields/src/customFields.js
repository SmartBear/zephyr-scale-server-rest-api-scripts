const category = require('./constants').category;
const type = require('./constants').type;

// Some samples of custom fields that could be created.
// Look at https://support.smartbear.com/tm4j-server/api-docs/v1/ for more information.
const customFields = [
    // {
    //     "name": "Checked",
    //     "required": true,
    //     "type" : type.CHECKBOX,
    //     "category" : category.TEST_CASE,
    // },
    // {
    //     name: "Quantity",
    //     type : type.NUMBER,
    //     category : category.TEST_CASE,
    // },
    // {
    //     name: "Owner",
    //     type : type.USER_LIST,
    //     category : category.TEST_CASE,
    // },
    {
        name: "Country",
        required: true,
        type : type.SINGLE_CHOICE_SELECT_LIST,
        category : category.TEST_CASE,
        customFieldOptions: [
            { name: "Brazil" },
            { name: "USA" },
            { name: "UK" },
            { name: "France" },
            { name: "Italy" }
        ]
    },
    {
        name: "Idiom",
        required: true,
        type : type.MULTI_CHOICE_SELECT_LIST,
        category : category.TEST_CASE,
        customFieldOptions: [
            { name: "English" },
            { name: "Portuguese" },
            { name: "French" },
            { name: "Spanish" },
            { name: "Italian" }
        ]
    },
]

module.exports = customFields;