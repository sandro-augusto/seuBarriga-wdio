// import act from "../support/actions";
// import el from "../elements/cadastroElements"
// import Page from "../support/page";

// class CadastroPage extends Page {

//     open () {
//         return super.open('cadastro');
//     }

//     async fillRegister (name, email, password) {
//         if (name !== null) {
//             await act.set(name)
//         }
//         if (email !== null) {
//             await act.set(email)
//         }
//         if (password !== null) {
//             await act.set(password)
//         }
//     }

//     async clickBtnCadastrar () {
//         await act.set(el.btnCadastrar)
//     }

//     async alertMessage () {
//         return act.getText(el.alertMessage)
//     }

//     async btnNovoCadastro () {
//         return act.clickIndex(el.alertMessage, 1)
//     }



// }

// export default new CadastroPage();