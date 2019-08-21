console.log("1");

// console.log("2");
let fs = require('fs');
getExt = () => {
  fs.readFile('08_ext.json', (err, data) => {
    console.log("2");
  })
}
getExt();

console.log("3");

/**
 * Console：
 * 1
 * 3
 * 2
 */


getExt = (callback) => {
  fs.readFile('08_ext.json', (err, data) => {
    callback(data);
  })  
}

getExt( (result) => {
  console.log(result.toString());
})
