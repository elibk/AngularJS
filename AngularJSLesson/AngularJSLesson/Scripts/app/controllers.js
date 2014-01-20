/// <reference path="../angular.js" />
//http://freegeoip.net/json

function MainController($scope, $http, $sce) {
   
    $scope.countyInfo = "";
    $scope.html = "";

    $scope.position = function () {
        navigator.geolocation.getCurrentPosition(
          function (position) {

            var yahooGeoPlaceUrl = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text%3D%22' + position.coords.latitude + '%2C' + position.coords.longitude + '%22%20and%20gflags%3D%22R%22&format=json';
            $http({ method: 'GET', url: yahooGeoPlaceUrl }).
                    success(function (country) {
                        var urlYahooo = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D' + country.query.results.Result.woeid + '&diagnostics=true&format=json';
                        $http({ method: 'GET', url: urlYahooo }).
                            success(function (country) {
                                $scope.countyInfo = country;
                                $scope.html = $sce.trustAsHtml(country.query.results.channel.item.description);
                            }).
                            error(function (error) {
                                console.log(error);
                            });
                    }).
                    error(function (error) {
                        console.log(error);
                    });
            }
        )
    }();

   
  }