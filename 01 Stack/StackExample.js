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

// 利用栈完成十进制转二进制
function dec2bin(decNumber){
    let stack = new Stack()
    let remainder;
    
    while(decNumber > 0){
        remainder = parseInt(decNumber / 2)
        stack.push(decNumber % 2)
        decNumber = remainder
    }

    let bin_Number="";
    while(!stack.isEmpty()){
        bin_Number = bin_Number + String(stack.pop())
    }
    return parseInt(bin_Number)
}

console.log( dec2bin(11))
console.log(typeof(dec2bin(11)))