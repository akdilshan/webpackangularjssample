const angular = require("angular");

angular.module('dashboard', []);

require('./directives/yep-nope.directive');
require('./services/github-status.service');
require('./controllers/dashboard.controller');