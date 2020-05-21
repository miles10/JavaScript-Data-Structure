let Stack = require('./StackClass.js');

let stack_temp = new Stack()
stack_temp.push("a")
stack_temp.push("b")
stack_temp.push("c")
stack_temp.print()
console.log( stack_temp.isEmpty())

console.log(stack_temp.peek())
console.log(stack_temp.pop())
stack_temp.print()
console.log(stack_temp.size())
stack_temp.clear()
stack_temp.print()

console.log("----------------------")
console.log("十进制转二进制")

function dec2bin(decNumber){
    let stack = new Stack()
    let remainder;
    
}