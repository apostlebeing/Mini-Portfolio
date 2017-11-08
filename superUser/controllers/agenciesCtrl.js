/* global angular */
(function () {
    'use strict'

    angular.module('sabio.superUser')
        .controller('agenciesController', agenciesController);

    agenciesController.$inject = ['agency'];

    function agenciesController(agency) {
        'use strict';

        var $ctrl = this;
        init();

        function init() {
            $ctrl.agencies = agency;
            $ctrl.onSelect = onSelect;
        }
        
        $ctrl.searchAgencies = $viewValue => {
            let params = {
                'name': $viewValue
            }
            return agencyService.search(params)
                .then(function (response) {
                    $ctrl.agenciesResult = response.items;
                    return response.items.map(function (item) {
                        return item.name;
                    });
                    });
        }

        function onSelect() {
             $ctrl.agencies = $ctrl.agenciesResult;
        }
    }
})()
