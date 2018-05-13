require('angular/angular.js');
require('@uirouter/angularjs/release/angular-ui-router.js');
require('angular-resource');
require('angular-material');
require('angular-animate');
require('angular-aria');

let req = require.context("./js");
req.keys().forEach(function (key) {
    req(key);
});