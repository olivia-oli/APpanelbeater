const path = require('path');

module.exports = {
  entry: '.ap/src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js', // The output file name
    path: path.resolve(__dirname, 'dist'), // The output folder
  },
  mode: 'development', // Can be 'development' or 'production'
};
