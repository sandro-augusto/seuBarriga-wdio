
class Actions {

    
    async click (el) {
        await el.click()
    }

    async clickIndex (el, index) {
        await $$(el)[index].click()
    }

    async set (el, text) {
        await el.setValue(text)
    }

    async getText (el) {
        return el.getText();
    }

}

export default new Actions();