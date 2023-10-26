// Import plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginRss = require('@11ty/eleventy-plugin-rss');

// Import filters
const cssMinFilter = require('./__design-system/filters/css-min.js');

module.exports = (eleventyConfig) => {
  // Add plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);

  // Add filters
  eleventyConfig.addFilter('cssmin', cssMinFilter);

  // Pass through
  eleventyConfig.addPassthroughCopy('./__design-system/uploads/');
  eleventyConfig.addPassthroughCopy('./__design-system/img/');
  eleventyConfig.addPassthroughCopy('./__design-system/fonts/');
  eleventyConfig.addPassthroughCopy('./__design-system/js/');
  eleventyConfig.addPassthroughCopy('./__design-system/android-chrome-192x192.png');
  eleventyConfig.addPassthroughCopy('./__design-system/android-chrome-384x384.png');
  eleventyConfig.addPassthroughCopy('./__design-system/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./__design-system/favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./__design-system/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./__design-system/favicon.ico');
  eleventyConfig.addPassthroughCopy('./__design-system/safari-pinned-tab.svg');
  eleventyConfig.addPassthroughCopy('./__design-system/site.webmanifest');
  eleventyConfig.addPassthroughCopy('./__design-system/robots.txt');

  return {
    dir: {
      input: '__design-system',
      output: 'flat',
    },
    passthroughFileCopy: true,
  };
};
