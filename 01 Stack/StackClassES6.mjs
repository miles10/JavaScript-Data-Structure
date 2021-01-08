// 栈类 ES6
export class Stack{
    // 栈中的属性
    items = []

    // 栈相关方法
    // push(element)
    // pop() 
    // peek()
    // isEmpty()
    // clear()
    // size()

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    clear() {
        return this.items = []
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items)
    }
}



