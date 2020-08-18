// See https://support.smartbear.com/tm4j-server/api-docs/v1/ for more information.

const { category } = require('../../src/constants');
const { type } = require('../../src/constants');

const projectKeyDEF = 'DEF';
const projectKeyOTHER = 'OTHER';

const customFields = [
  {
    projectKey: projectKeyDEF,
    name: 'Checked',
    required: true,
    type: type.CHECKBOX,
    category: category.TEST_CASE,
  },
  {
    projectKey: projectKeyDEF,
    name: 'Quantity',
    type: type.NUMBER,
    category: category.TEST_CASE,
  },
  {
    projectKey: projectKeyDEF,
    name: 'Owner',
    type: type.USER_LIST,
    category: category.TEST_CASE,
  },
  {
    projectKey: projectKeyOTHER,
    name: 'Country',
    required: true,
    type: type.SINGLE_CHOICE_SELECT_LIST,
    category: category.TEST_CASE,
    customFieldOptions: [
      { name: 'Brazil' },
      { name: 'USA' },
      { name: 'UK' },
      { name: 'France' },
      { name: 'Italy' },
    ],
  },
  {
    projectKey: projectKeyOTHER,
    name: 'Language',
    required: true,
    type: type.MULTI_CHOICE_SELECT_LIST,
    category: category.TEST_CASE,
    customFieldOptions: [
      { name: 'English' },
      { name: 'Portuguese' },
      { name: 'French' },
      { name: 'Spanish' },
      { name: 'Italian' },
    ],
  },
];

module.exports = {
  customFields,
};
