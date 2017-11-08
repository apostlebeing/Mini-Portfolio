/* global angular */
(function () {
    'use strict'

    angular.module('sabio.superUser', ['ui.router', 'ncy-angular-breadcrumb'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('superuser.main', {
                url: '/superuser',
                abstract: true
            })
            .state('superuser.main.dashboard', {
                url: '/dashboard',
                ncyBreadcrumb: {
                    label: 'Dashboard'
                },
                views: {
                    'content@superuser': {
                        templateUrl: 'public/modules/superUser/views/superUserDashboard.html',
                        controller: 'dashboardController as $ctrl'
                    }
                }
            })
            .state('superuser.main.invoices', {
                url: '/invoices',
                ncyBreadcrumb: {
                    label: 'Invoices',
                    parent: 'superuser.main.dashboard'
                },
                views: {
                    'content@superuser': {
                        templateUrl: 'public/modules/superUser/views/invoices.html',
                        controller: 'invoicesController as $ctrl'
                    }
                }
            })
            .state('superuser.main.metrics', {
                url: '/metrics',
                ncyBreadcrumb: {
                    label: 'Metrics',
                    parent: 'superuser.main.dashboard'
                },
                views: {
                    'content@superuser': {
                        templateUrl: 'public/modules/superUser/views/metrics.html',
                        controller: 'metricsController as $ctrl'
                    }
                }
            })
            .state('superuser.main.agencies', {
                url: '/agencies',
                ncyBreadcrumb: {
                    label: 'Agencies',
                    parent: 'superuser.main.dashboard'
                },
                views: {
                    'content@superuser': {
                        templateUrl: 'public/modules/superUser/views/agencies.html',
                        controller: 'agenciesController as $ctrl',
                        resolve: {
                        agency: getAllAgencies
                            }
                        }
                    }
                })
            .state('superuser.main.users', {
                url: '/users',
                ncyBreadcrumb: {
                    label: 'Users',
                    parent: 'superuser.main..dashboard'
                },
                views: {
                    'content@superuser-navbar': {
                        templateUrl: 'public/modules/superUser/views/users.html',
                        controller: 'UserController as $ctrl',
                        resolve: {
                            users: getAllUsers,
                            agency: getAllAgencies
                        }
                    }
                }
            })
    }

    getAllUsers.$inject = ['userService'];
    function getAllUsers(userService) {
        return userService.getAllExt()
            .then((data) => {
                return data.items
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getAllAgencies.$inject = ['agencyService'];
    function getAllAgencies(agencyService) {
        return agencyService.getAll()
            .then((data) => {
                return data.items
            })
            .catch((error) => {
                console.log(error)
            });
    }

})()