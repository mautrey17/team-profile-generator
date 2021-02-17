const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe('Manager', () => {
    it('create new instance of manager', () => {
        const m = new Manager();

        expect(typeof(m)).toEqual('object');
    });

    it('returns GitHub account with function getOffice()', () => {
        const m = new Manager('name', 2, 'fake.mail.com', '301');

        expect(m.getOffice()).toEqual('301');
    });

    it('returns Manager as role with function getRole()', () => {
        const m = new Manager();

        expect(m.getRole()).toEqual('Manager')
    });
})