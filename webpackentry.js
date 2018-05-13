require('angular/angular.js');
require('@uirouter/angularjs/release/angular-ui-router.js');
require('angular-resource');
require('angular-material');
require('angular-animate');
require('angular-aria');

require('./js/app');
let req = require.context("./js", true, /^(?!.*app.js)((.*\.(js\.*))[^.]*$)/im);
req.keys().forEach(function (key) {
    req(key);
});