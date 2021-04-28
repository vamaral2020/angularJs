angular.module('app').controller('CadastroController', CadastroController);
CadastroController.$inject = ['$location', 'CursoService', '$routeParams'];

function CadastroController($location, CursoService, $routeParams) {
    vm = this;
    vm.teste = 'Cadastro'
    vm.cliente = {}
    vm.id = undefined;
    vm.textoBotao = 'Cadastrar'


    if ($routeParams.id) {
        vm.id = $routeParams.id;
        buscarId(vm.id)
        vm.textoBotao = 'Editar'
    }

    vm.navegar = function () {
        $location.path('/')
    }

    vm.cadastrar = function () {

        if (vm.textoBotao == 'Cadastrar') {

            CursoService.exec_POST(vm.cliente).then(function (resposta) {
                if (resposta) {
                    vm.clientes = resposta
                }
            })
        } else if (vm.textoBotao == 'Editar') {
            CursoService.exec_PUT(vm.cliente).then(function (resposta) {
                if (resposta) {
                    vm.clientes = resposta
                }
            })
        }
        vm.navegar('/')

    }

    function buscarId(id) {
        CursoService.exec_GET_ID(id).then(function (resposta) {
            if (resposta) {
                vm.cliente = resposta
            }
        })
    }

    vm.limpar = function () {
        vm.cliente = {}
    }


}
