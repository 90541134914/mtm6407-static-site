module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("favicon.ico"); // optional

  return {
    // GitHub Pages will serve from this folder
    dir: {
      input: "src",
      output: "docs",   // ✅ MUST be "docs" for GitHub Pages to work (as you already did)
      layouts: "layouts"
    },
    // ✅ Needed for GitHub Pages to correctly resolve URLs
    pathPrefix: "/mtm6407-static-site/"
  };
};
