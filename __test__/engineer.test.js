const Engineer = require('../lib/engineer');

test('Create a constructor, and get it values(with the super values)', () => {
    const enginner = new Engineer("Bob", 12, "Bob@Bob", "bob223");
    expect(enginner.name).toEqual(expect.any(String));
    expect(enginner.id).toEqual(expect.any(Number));
    expect(enginner.email).toEqual(expect.any(String));
    expect(enginner.github).toEqual(expect.any(String));
});

test('can return a GitHub username', () => {
    const user = 'user212';
    const engineer = new Engineer('bob', 12, "Bob@Bob", user )
    expect(engineer.getGitHub()).toBe(user);
})