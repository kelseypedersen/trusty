'use strict';

angular.module('app', [])
    .controller('AppCtrl', [
        '$scope', '$location',
        function ($scope, $location) {

            var app = this;

            /**
             * @type {createTrip}
             */

            app.createTrip = createTrip;

            /**
             * @type {showView}
             */

            app.showView = showView;

            /**
             * @type {addDestination}
             */

            app.addDestination = addDestination;

            /**
             * @type {reviewTrip}
             */

            app.reviewTrip = reviewTrip;

            /**
             * Error handling after a failed trip creation
             * @param response
             */

            function createTripError(response) {
                // Something like this...
                // APIService.genericApiFailture(response)
                if (response.data) {
                    // This should parse for the error message
                    error = response.data
                }

                // Pop up error message
                // e.g. Flash.create('error', error)
            }

            function createTrip() {
                var date = new Date();
                app.showView('add-destination');
                ////app.data.submit_day = date.toLocaleDateString('en-US');
                // APIService.createTrip(app.data).then(function successfulCallback(response){
                //     app.state.created = true;
                //     app.showView('add-destinations');
                //     // _kmq.push('record', 'TRIP_CREATE', app.data);
                // }, createTripError);
            }

            function showView(view) {
                $location.path(view);
            }

            function addDestination() {
               // Add logic to save destination to specific trip
                // Then redirect to new destination page to add another destination

                app.showView('add-destination');
            }

            function reviewTrip(){
                // Add logic to save destination to specific trip
                // Then redirect to review page

                app.showView('review');

            }

        }]);
