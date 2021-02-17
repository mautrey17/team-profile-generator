const Employee = require("../lib/employee");

describe('Employee', () => {
    it('can create new instance of employee', () => {
        const e = new Employee();

        expect(typeof(e)).toBe('object')
    });

    it('can get name using getName()', () => {
        const e = new Employee('Matt');

        expect(e.getName()).toBe('Matt');
    });

    it('can get id using getId()', () => {
        const e = new Employee('Matt', 2);
    
        expect(e.getId()).toBe(2);
    });

    it('can get role using getRole()', () => {
        const e = new Employee('Matt', 2, 'test.mail.com');
    
        expect(e.getRole()).toBe('Employee');
    });
})