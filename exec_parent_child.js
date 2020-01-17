//执行上下文

//变量提升
var foo = function () {
    console.log('foo1');
}

foo();  // foo1

var foo = function () {
    console.log('foo2');
}
foo(); // foo2

//函数提升
function foo1(){
    console.log('foo1')
}
foo1();
function foo1(){
    console.log('foo2')
} 
foo1();