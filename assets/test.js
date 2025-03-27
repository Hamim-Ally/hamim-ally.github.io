// generate.js
const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

// Define the data that will be injected into the template
const data = {
  title: "My Static Site",
  description: "This is a description of my awesome static site!"
};

// Read the template file
const templatePath = path.join(__dirname, 'templates', 'index.ejs');
ejs.renderFile(templatePath, data, {}, (err, str) => {
  if (err) {
    console.error('Error rendering template:', err);
    return;
  }

  // Output the rendered HTML to a file
  const outputPath = path.join(__dirname, 'public', 'index.html');
  fs.outputFileSync(outputPath, str);
  console.log('Site generated at:', outputPath);
});
