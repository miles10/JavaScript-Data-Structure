let Queue = require('./QueueClass.js');

let Queue_temp = new Queue()
Queue_temp.enqueue("a")
Queue_temp.enqueue("b")
Queue_temp.enqueue("c")
Queue_temp.print()
console.log( Queue_temp.isEmpty())

console.log(Queue_temp.dequeue())
console.log(Queue_temp.front())
Queue_temp.print()
console.log(Queue_temp.size())


console.log("----------------------")
console.log("十进制转二进制")
