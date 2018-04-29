require('angular/angular.js');
require('./js/sampleapp');
let req = require.context("./js", true, /^(?!.*sampleapp.js)((.*\.(js\.*))[^.]*$)/im);
req.keys().forEach(function (key) {
    req(key);
});


require('@uirouter/angularjs/release/angular-ui-router.js');
require('angular-resource');
require('angular-material');
require('angular-animate');
require('angular-aria');
