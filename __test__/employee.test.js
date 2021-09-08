const Employee = require('../lib/employee');

test('Create a constructor, and get it values', () => {
    const employee = new Employee("Bob", 12, "Bob@Bob");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
})

test('Can return name from getName()', () => {
    const name = "bob";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})
test('Can return id from getid()', () => {
    const id = 12;
    const employee = new Employee("name", id);
    expect(employee.getId()).toBe(id);
})
test('Can return email from getEmail()', () => {
    const email = "Bob@bob";
    const employee = new Employee('Bob', 12, email);
    expect(employee.getEmail()).toBe(email);
})