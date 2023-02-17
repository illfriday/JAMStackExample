const yaml = require('js-yaml');
const slug = require('slug');
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');
  eleventyConfig.addLayoutAlias('base', 'pageTemplates/base.njk');
  eleventyConfig.addLayoutAlias('page', 'pageTemplates/page.njk');
  eleventyConfig.addLayoutAlias('page-hero', 'pageTemplates/page-hero.njk');
  eleventyConfig.addDataExtension('yaml', (contents) =>
    yaml.safeLoad(contents)
  );
  eleventyConfig.addShortcode('clientTag', function (name) {
    return `<a href="/clients/${name}" class="badge badge-secondary">${name}</a>`;
  });
  eleventyConfig.addPairedShortcode('pairedClient', function (data, name) {
    return `${data} <a class="badge badge-secondary" href="/clients/${slug(name)}">${name}</a>`;
  });
  eleventyConfig.addFilter('courseDate', (dateObj) => {
    return DateTime.fromFormat(dateObj, 'LLL d, yyyy').toFormat('yyyy-LL-dd');
  });
  eleventyConfig.addFilter('simpleDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'LLL dd, yyyy'
    );
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      input: '_site',
      output: 'dist',
      // clients: '_clients',
    },
  };
};
