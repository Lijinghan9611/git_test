 //JavaScript深入之变量对象
console.log(this);
console.log(this instanceof Object);
console.log(Math.random())

// function foo() {
//     console.log(a);
//     a = 1;
// }

// foo(); // ???

// function bar() {
//     a = 1;
//     console.log(a);
// }
// bar(); // ???

// console.log(foo);

// function foo(b){
//     console.log(this.Arguments)
//     console.log("foo");
// }

// foo(1)

var foo //进入执行上下文 变量名与已经声明的函数名相同，被忽略
console.log(foo);
console.log(typeof foo) //输出function

function foo(){
    console.log("foo");
};
foo()

foo = 1;  //执行过程被赋值，修改了类型

console.log(foo);
console.log(typeof foo)  //输出number
