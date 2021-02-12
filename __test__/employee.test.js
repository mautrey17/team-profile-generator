const Employee = require("../lib/employee");

test('can create new instance of employee', () => {
    const e = new Employee();

    expect(typeof(e)).toBe('object')
});

test('can get name using getName()', () => {
    const e = new Employee('Matt');

    expect(e.getName()).toBe('Matt');
})