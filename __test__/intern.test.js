const Intern = require('../lib/Intern');

test('Create a constructor, and get it values(with the super values)', () => {
    const intern = new Intern("Bob", 12, "Bob@Bob", "University of Houston");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('can return a school name', () => {
    const uni = 'University of Houston';
    const intern = new Intern('bob', 12, "Bob@Bob", uni )
    expect(intern.getSchool()).toBe(uni);
})

