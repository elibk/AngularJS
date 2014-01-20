
angular.module('weather-forecast', ['ngRoute', 'ngSanitize']).config(['$routeProvider',
  function($routeProvider) {
      $routeProvider
            .when("/", { templateUrl: "scripts/partial-views/home.html", controller: MainController })
			.when("/location", { templateUrl: "scripts/partial-views/location.html", controller: MainController })
            .otherwise({ redirectTo: '/' });
    }]);
