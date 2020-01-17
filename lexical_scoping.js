//静态作用域与动态作用域
var value = 1;

function foo(){
    console.log(value);
}

function bar(){
    var value= 2;
    console.log(value);
    foo();
}

bar();

//----------------
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(checkscope());
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log(checkscope()());