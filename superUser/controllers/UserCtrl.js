
(function () {
    'use strict';

    angular.module('sabio.superUser')
        .controller('UserController', UserController);

    UserController.$inject = ['userService', 'users', 'roles', '$scope', 'agency', '$state', '$anchorScroll', '$location'];

    function UserController(userService, users, roles, $scope, agency, $state, $anchorScroll, $location) {
        'use strict';

        var $ctrl = this;

        init();

        function init() {
            $ctrl.users = users;
            $ctrl.roles = roles;
            $ctrl.agency = agency;
            $ctrl.agencyNameAndObject = agencyNameAndObject;
            $ctrl.setAgency = setAgency;
            $ctrl.populateForm = populateForm;
            $ctrl.agencyName;
            $ctrl.formData = {};
            $ctrl.formData.role = roles.customer;
            $ctrl.agencyNameAndObject = {};

            agencyNameAndObject()

        }

        function agencyNameAndObject() {
            let agencyName;
            let agencyObj;
            for (var i = 0; i < $ctrl.agency.length; i++) {
                agencyName = $ctrl.agency[i].name
                agencyObj = $ctrl.agency[i]
                $ctrl.agencyNameAndObject[agencyName] = agencyObj;
            }
        }
       
        function setAgency(agencyName) {
            let agencyObject = $ctrl.agencyNameAndObject;
            $ctrl.formData.agency = agencyObject[agencyName];
        }

        function populateForm(user) {
            $location.hash('userForm');
            $anchorScroll();
            $ctrl.formData.local = {};
            $ctrl.formData._id = user._id;
            $ctrl.formData.firstName = user.firstName;
            $ctrl.formData.lastName = user.lastName;
            $ctrl.formData.local.email = user.local.email;
            $ctrl.formData.role = user.role;
        }

        $ctrl.insert = (isValid) => {
            if (!isValid) {
                _toastr('Invalid form data entered', 'top-right', 'error', false);
            } else {
                userService.insert($ctrl.formData)
                    .then(onInsertSuccess)
                    .catch(onError);
            }
        };

        $ctrl.updateInfo = (isValid) => {
            if (!isValid) {
                _toastr('Invalid form data entered', 'top-right', 'error', false);
            } else {
                let id = $ctrl.formData._id;
                let data = {};
                data.firstName = $ctrl.formData.firstName;
                data.lastName = $ctrl.formData.lastName;
                data.email = $ctrl.formData.local.email;
                data.role = $ctrl.formData.role;
                data.agency = $ctrl.formData.agency;
                userService.updateInfo(id, data)
                    .then(onUpdateSuccess)
                    .catch(onError);
            }
        };

        $ctrl.updatePassword = (isValid) => {
            if (!isValid) {
                _toastr('Invalid form data entered', 'top-right', 'error', false);
            } else {
                let id = $ctrl.formData._id;
                let data = {};
                data.password = $ctrl.formData.local.password;
                userService.updatePassword(id, data)
                    .then(onUpdateSuccess)
                    .catch(onError);
            }
        };

        $ctrl.remove = (id) => {
            $ctrl.currentId = id;

            userService.remove(id)
                .then(onDeleteSuccess)
                .catch(onError);
        };


        function onInsertSuccess(data) {
            _toastr('User successfully added', 'top-right', 'success', false);
            $ctrl.formData = {};
            $ctrl.agencyName = ' ';
            $ctrl.formData.role = roles.customer;
            $scope.userInfoForm.$setPristine();
            $scope.userPasswordForm.$setPristine();
            $state.reload();
        }


        function onUpdateSuccess(data) {
            _toastr('User info successfully updated', 'top-right', 'success', false);
            $ctrl.formData = {};
            $ctrl.agencyName = ' ';
            $ctrl.formData.role = roles.customer;
            $scope.userInfoForm.$setPristine();
            $scope.userPasswordForm.$setPristine();
            $state.reload();

        }

        function onDeleteSuccess(data) {
            _toastr('User successfully deleted', 'top-right', 'warning', false);


            $ctrl.formData = {};
            $ctrl.agencyName = ' ';
            $ctrl.formData.role = roles.customer;
            $scope.userInfoForm.$setPristine();
            $scope.userPasswordForm.$setPristine();


            let removeIndex = $ctrl.users.findIndex((element, index, users) => {
                return element._id === $ctrl.currentId;
            })
            $ctrl.users.splice(removeIndex, 1);
        }

        function onError(data) {
            _toastr(`Error: ${data.errors}`, 'top-right', 'error', false);
        }
    }
})()