import loginPage from "../pageobjects/pages/loginPage";


describe('Login validações', () => {

    it('Success Login', async () => {
        loginPage.open('login')
        await loginPage.login('teste@teste.com', 123456)
        await loginPage.clickBtnEntrar()
        await loginPage.validaMesagem((mensagem) => {
            expect(mensagem).toBe('Bem vindo, thiago!')
        })
    })








})