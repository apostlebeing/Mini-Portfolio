(function () {
    'use strict';

    angular.module('sabio.superUser')
        .factory('userService', UserServiceFactory);

    UserServiceFactory.$inject = ['$http'];

    function UserServiceFactory($http) {
        return {
            getAll: getAll,
            getAllExt: getAllExt,
            getById: getById,
            getByTokenId: getByTokenId,
            forgot: forgot,
            insert: insert,
            update: update,
            updateInfo: updateInfo,
            updatePassword: updatePassword,
            remove: remove,
            logOut: logOut
        };

        function getAll() {
            return $http.get('/api/users')
                .then(xhrSuccess)
                .catch(onError)
        }

        function getAllExt() {
            return $http.get('/api/users/getAllExt')
                .then(xhrSuccess)
                .catch(onError)
        }

        function getById(id) {
            return $http.get(`/api/users/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function getByTokenId(id) {
            return $http.get(`/api/users/reset/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function forgot(params) {
            return $http({
                url: '/api/users/forgot',
                method: 'POST',
                params: params
            })
                .then(xhrSuccess)
                .catch(onError)
        }

        function insert(userData) {
            return $http.post('/api/users/', userData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(userData) {
            return $http.put(`/api/users/${userData._id}`, userData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function updateInfo(id, userData) {
            return $http.put(`/api/users/${id}/info`, userData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function updatePassword(id, userData) {
            return $http.put(`/api/users/${id}/password`, userData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function remove(id) {
            return $http.delete(`/api/users/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function logOut() {
            return $http.post('/api/users/logout')
                .then((response) => {
                    localStorage.removeItem('superUserAgency');
                    localStorage.removeItem('userInfo');
                    xhrSuccess(response);
                })
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data;
        }

        function onError(error) {
            console.log(error.data);
        }
    }
})()