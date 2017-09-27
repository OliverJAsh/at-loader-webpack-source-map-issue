const validate = require('sourcemap-validator');
const fs = require('fs');
const assert = require('assert');
const min = fs.readFileSync(`${__dirname}/target/main.js`, 'utf-8');
const map = fs.readFileSync(`${__dirname}/target/main.js.map`, 'utf-8');

validate(min, map);
