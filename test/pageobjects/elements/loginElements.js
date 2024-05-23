import { $ } from '@wdio/globals'

class LoginElements {

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#senha');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get validaLogin () {
        return $('h1');
    }

    get alertMessage () {
        return $('.alert');
    }
}

export default new LoginElements();
