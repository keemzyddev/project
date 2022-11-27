var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('first.txt'); //Create a readable stream

readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

// Handle stream events --> data, end, and error
readerStream.on('data', (chunk) => {
   data += chunk;
});

readerStream.on('end',() => {
   console.log(`this is: ${data}, `);
});

readerStream.on('error', (err) => {
   console.log(err.stack);
});

console.log("Program Ended");