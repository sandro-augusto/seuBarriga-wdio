import { $ } from '@wdio/globals'

class cadastroElements {

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#senha');
    }

    get inputNome () {
        return $('#nome');
    }

    get btnCadastrar () {
        return $('.btn');
    }

    get alertMessage () {
        return $('.alert')
    }

    get btnNovoCadastro () {
        return $('li a')
    }

}
export default new cadastroElements();