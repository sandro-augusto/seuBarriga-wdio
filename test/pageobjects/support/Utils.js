import { faker } from '@faker-js/faker';
import { $ } from '@wdio/globals'


class Utils {

    get randomEmail () {
        return faker.internet.email();
    }

    get randomName () {
        return faker.person.fullName() + faker.random.numeric(numero);
    }

    get randomUserName () {
        return faker.person.firstName();
    }

    get randomPassword () {
        return  faker.number.int({ min: 10000000, max: 99999999 });
    }

    get randomNumeric () {
        return faker.random.numeric(numero)
    }

    get upload () {
        $('input[accept="image/*"]').addFile('');
    }
}

export default new Utils();