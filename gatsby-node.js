/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /intersection-observer/,
            use: loaders.null(),
          },
          {
            test: /webfontloader/,
            use: loaders.null(),
          },
          {
            test: /@dailybruin/,
            use: loaders.null(),
          },
          {
            test: /smoothscroll-polyfill/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}