// Available types of custom fields
const type = {
    SINGLE_LINE_TEXT: "SINGLE_LINE_TEXT",
    MULTI_LINE_TEXT: "MULTI_LINE_TEXT",
    NUMBER: "NUMBER",
    DATE: "DATE",
    DECIMAL: "DECIMAL",
    USER_LIST: "USER_LIST",
    CHECKBOX: "CHECKBOX",
    SINGLE_CHOICE_SELECT_LIST: "SINGLE_CHOICE_SELECT_LIST",
    MULTI_CHOICE_SELECT_LIST: "MULTI_CHOICE_SELECT_LIST",
}

// Available categories of custom fields
const category = {
    TEST_CASE: "TEST_CASE",
    TEST_PLAN: "TEST_PLAN",
    TEST_RUN: "TEST_RUN",
    TEST_STEP: "TEST_STEP",
    TEST_EXECUTION: "TEST_EXECUTION",
    FOLDER: "FOLDER",
}

// Samples of custom fields that could be created.
const customFields = [
    {
        name: "Checked",
        required: true,
        type : type.CHECKBOX,
        category : category.TEST_CASE,
    },
    {
        name: "Quantity",
        type : type.NUMBER,
        category : category.TEST_CASE,
    },
    {
        name: "Owner",
        type : "USER_LIST",
        category : category.TEST_CASE,
    },
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