let Queue = require('./QueueClass.js').Queue;
let PriorityQueue = require('./QueueClass.js').PriorityQueue;

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
console.log("优先级队列")
let PQ_temp = new PriorityQueue()
PQ_temp.enqueue("a",0)
PQ_temp.enqueue("b",2)
PQ_temp.enqueue("e",4)
PQ_temp.print()
console.log( PQ_temp.isEmpty())
PQ_temp.enqueue("c",3)

PQ_temp.print()
console.log(PQ_temp.size())