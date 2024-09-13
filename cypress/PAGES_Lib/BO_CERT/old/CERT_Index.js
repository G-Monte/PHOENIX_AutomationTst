//method to dynamically import all the test files. 

//const requireTest = require.context('.', true, /\.cy\.js$/);
const requireTest = require.context('.', true, /\.js$/);

requireTest.keys().forEach(requireTest);