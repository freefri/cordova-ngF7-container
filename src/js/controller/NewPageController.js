/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.directive('newPageController', function (StateParams, Router, ItemsService) {
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'src/templates/controller/new.html',
    controller: function ($scope) {

      var maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 1);
      $scope.calendar = {
        minDate: new Date(),
        maxDate: maxDate
      };

      $scope.addNew = function () {
        ItemsService.add($scope.item).then(function () {
          Router.back();
        });
      };

      StateParams.get('newPage', function () {
        $scope.item = {};
      });
    }
  };
});