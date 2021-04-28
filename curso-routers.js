angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/Cadastro/:id?', {
            templateUrl: 'cadastro/cadastro.html',
            controller: 'CadastroController as vm'
        })
        .otherwise({
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
        })

})