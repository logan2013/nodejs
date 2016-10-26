/**
 * New node file
 */
var Readable = require("stream").Readable;

var rs = new Readable();
rs.push("beep ");
rs.push("boop\n ");

/**
 * tells the consumer that rs is done output data.
 */
rs.push(null);

rs.pipe(process.stdout);