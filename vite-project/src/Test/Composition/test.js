const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x);
const user = { name: 'Gianmarco', password: 1234 }
const getUserName = (user) => user.name
const upperCase = (string) => string.toUpperCase()
const firstFour = (string) => string.substring(0, 4)
console.log(compose(firstFour, upperCase, getUserName)(user)) // GIAN