module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico"); // optional

  return {
    dir: {
      input: "src",
      output: "docs",
      layouts: "layouts"
    },
    pathPrefix: "/mtm6407-static-site/"
  };
};
