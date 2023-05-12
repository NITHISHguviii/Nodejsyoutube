// Node.js program to demonstrate
// the fsPromises.readFile() method

// Include fs module
const fs = require('fs');
const fsPromises = require('fs').promises;

// Use fsPromises.readFile() method
// to read the file
fs.promises.readFile("first.txt")
	.then(function (result) {
		console.log("" + result);
	})
	.catch(function (error) {
		console.log(error);
	})
