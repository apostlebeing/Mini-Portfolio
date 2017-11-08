(function () {
    'use strict'
    angular.module('sabio.superUser')
        .component('agenciesList', {
            templateUrl: '/public/modules/superUser/views/agenciesComponent.html',
            controller: AgencyComponentController,
            bindings: {
                agencies: '<'
            }
        })
    AgencyComponentController.$inject = ['$state','$scope'];

    function AgencyComponentController($state, $scope) {
        'use strict'
        var $ctrl = this;
        init();


        function init() {
            $ctrl.logInAsAgency = logInAsAgency;
        }

        function logInAsAgency(agency) {
            localStorage.removeItem('superUserAgency');
            localStorage.setItem('superUserAgency', angular.toJson(agency));
            $scope.$emit ('updateLayout')
            $state.go('app.helm.dashboard')
        }
    }


})()