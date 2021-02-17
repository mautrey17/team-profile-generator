const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe('Engineer', () => {
    it('create new instance of engineer', () => {
        const e = new Engineer();

        expect(typeof(e)).toEqual('object');
    });

    it('returns GitHub account with function getGithub()', () => {
        const e = new Engineer('name', 2, 'fake.mail.com', 'github account');

        expect(e.getGithub()).toEqual('github account')
    });

    it('returns Engineer as role with function getRole()', () => {
        const e = new Engineer();

        expect(e.getRole()).toEqual('Engineer')
    });
})