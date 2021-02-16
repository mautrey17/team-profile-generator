const Employee = require("../lib/employee");

test('can create new instance of employee', () => {
    const e = new Employee();

    expect(typeof(e)).toBe('object')
});

test('can get name using getName()', () => {
    const e = new Employee('Matt');

    expect(e.getName()).toBe('Matt');
});

test('can get id using getId()', () => {
    const e = new Employee('Matt', 2);

    expect(e.getId()).toBe(2);
});

test('can get email using getEmail()', () => {
    const e = new Employee('Matt', 2, 'test.mail.com');

    expect(e.getEmail()).toBe('test.mail.com');
});

test('can get role using getRole()', () => {
    const e = new Employee('Matt', 2, 'test.mail.com');

    expect(e.getRole()).toBe('Employee');
});