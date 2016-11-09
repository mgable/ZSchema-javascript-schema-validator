"use strict";

var ZSchema = require("z-schema"),
	_ = require("underscore"),
	validator = new ZSchema({assumeAdditional: true, noTypeless: true, noExtraKeywords: true}), //, forceProperties: true
	fs = require('fs');

ZSchema.registerFormat("isUSA", function (str) {
    return /^(usa|united states|united states of america|america)$/i.test(str)
});

ZSchema.registerFormat("isDate", function (date) {
    return !isNaN(Date.parse(date));
});



var schema = JSON.parse(fs.readFileSync('./schema.json', 'utf-8'));
var json = JSON.parse(fs.readFileSync('./boss.json', 'utf-8'));

//console.info(json);
//validator.setRemoteReference("./schema.json", schema);

var allSchemasValid = validator.validateSchema(schema);

console.info(allSchemasValid);
// allSchemasValid === true

// now validate our data against the last schema

validator.validate(json, _.last(schema), function (err, valid) {
    if (err){
    	console.info("NOT VALID");
    	console.info(err);
    } else if (valid){
    	console.info("we are valid");
    	console.info(valid);
    }
});