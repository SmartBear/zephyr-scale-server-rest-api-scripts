// Available types of custom field
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

module.exports = {
    category: category,
    type: type
}