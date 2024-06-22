const path = require('path');

//returns the path when a file or folder is given as input.
//app.js filename can change, so 
//use require.main.filename. dynamically fetches main file(here app.js)
const rootDir = path.dirname(require.main.filename);

module.exports = rootDir;