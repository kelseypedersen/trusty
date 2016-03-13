angular.module('trip', [])
    .controller('TripCtrl', [
        '$scope', '$location', '$stateParams',
        function ($scope, $location, $stateParams) {





              // $location.path("trip/:id");


            $scope.trip = {
              title: 'Tester Title',
              id: 1
            }

            // Necessary for passing params into url
            $scope.id = $stateParams.id;

            $scope.results = [
              { "title": "5 Days in California",
                "season": "Fall",
                "days": 5,
                "activity_type": "adventure",
                "id": 1
              }, { "title": "12 Days in Mexico",
                "season": "Summer",
                "days": 12,
                "activity_type": "romance, fun in the sun",
                "id": 2
              }
            ]

            $scope.destinations = [
              {
                "id": 1,
                "city": "Palo Alto",
                "country": "United States",
                "tripId": 1
              },

              { "id": 2,
                "city": "San Francisco",
                "country": "United States",
                "tripId": 2
              }
            ]

            $scope.viewDestinations = function(){

            }


        }
      ]
    )
