module.exports = function(eleventyConfig) {
  // Copy styles.css from project root to _site folder
  eleventyConfig.addPassthroughCopy("styles.css");

  return {
    dir: {
      input: "src",       // your source folder
      output: "_site",    // build output folder
      layouts: "layouts"  // layouts folder inside src
    }
  };
};
