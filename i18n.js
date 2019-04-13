const NextI18Next = require('next-i18next/dist/commonjs');

module.exports = new NextI18Next({
  localeSubpaths: 'foreign',
  defaultLanguage: 'fr',
  otherLanguages: ['en'],
});