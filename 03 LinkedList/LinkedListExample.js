let LinkedList = require('./LinkedListClass.js').LinkedList;

let list = new LinkedList()
list.append("0")
list.append("1")
list.append("2")
list.insert("b",2)
let listString = list.toString()
console.log(listString)

