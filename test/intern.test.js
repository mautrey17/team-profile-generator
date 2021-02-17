const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe('Intern', () => {
    it('create new instance of intern', () => {
        const i = new Intern();

        expect(typeof(i)).toEqual('object');
    });

    it('returns school with function getSchool()', () => {
        const i = new Intern('name', 2, 'fake.mail.com', 'UNC');

        expect(i.getSchool()).toEqual('UNC');
    });

    it('returns Intern as role with function getRole()', () => {
        const i = new Intern();

        expect(i.getRole()).toEqual('Intern')
    });
})