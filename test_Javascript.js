QS : https://github.com/mqyqingfeng/Blog/issues/2
var obj = new Object();
obj.name = 'Ka';
console.log(obj.name)

function Person() {
    console.log('222')
}

Person.prototype.name = 'kevin';
var person = new Person();
person.name = 'Kevin11';
console.log(person.name) // Kevin
console.log(person.__proto__ === Person.prototype)

console.log(Person.prototype.constructor === Person)
console.log(Person.prototype)
console.log(Object.getPrototypeOf(person) === Person.prototype)

var foo = {}
console.log(foo.__proto__)

var person2 = new Person.prototype.constructor();
console.log(person2)

console.log(typeof Person.prototype.constructor)

person.name= 'daisy';
console.log(person.name)
delete person.name;
console.log(person.name);

console.log(person.constructor.name)