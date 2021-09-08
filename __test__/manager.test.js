const { expect } = require("@jest/globals");
const Manager = require("../lib/manager");

test('Create a constructor, and get it values(with the super values)', () => {
    const manager = new Manager("Bob", 12, "Bob@Bob", 102);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Check getOfficeNumber() returns the office number', () => {
    const officeNumber = 102;
    const manager = new Manager("Bob", 12, "Bob@Bob", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})