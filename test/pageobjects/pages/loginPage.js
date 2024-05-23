import el from '../elements/loginElements.js' 
import act from '../support/actions.js';
import Page from './Page.js';

class LoginPage extends Page {

    open () {
        return super.open('login');
    }

    async login (username, password) {
        if (username !== null) {
            await act.set(el.inputEmail, username); 
        }
        if (password !== null) {
            await act.set(el.inputPassword, password); 
        }
    }

    async clickBtnEntrar() {
        await act.click(el.btnSubmit);
    }

    async validaMesagem () {
        return await act.getText(el.alertMessage)
    }
 
}

export default new LoginPage();
