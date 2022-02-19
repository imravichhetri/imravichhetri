const path = require('path');

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\//)) {
//   // page.matchPath = "/*"
//     // Update the page.
//     // createPage(page)
//     createPage({
//       path: "/*",
//       matchPath: "/",
//       component: path.resolve("src/pages/index.js")
//     })
//   }
// }


// exports.replaceRenderer = ({ replaceBodyHTMLString }) => {
//   replaceBodyHTMLString('<div id="___gatsby"></div>');
// };