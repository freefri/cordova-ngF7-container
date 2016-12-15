MyApp.angular.factory('Router', function ($timeout) {
  'use strict';

  var pub = {};

  var fw7 = MyApp.fw7;

  pub.go = function(page) {
    var mainView = fw7.views[0];
    mainView.router.loadPage(page);
  };

  pub.back = function(opt) {
    $timeout(function () {
      var mainView = fw7.views[0];
      mainView.router.back(opt);
    });
  };

  return pub;

});