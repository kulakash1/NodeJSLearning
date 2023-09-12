// const statement = require("../../../Practice 1/3. Import and Export a Function using Common JS Module Syntax/exportFunction");
const greetings = require("../greeting/index");


const msg = `Hello Rahul! ${greetings}`;
console.log(msg);
module.exports = msg;