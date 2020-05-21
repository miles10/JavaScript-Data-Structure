// 栈类
function Stack(){
    // 栈中的属性
    var items = []

    // 栈相关方法
    // push(element)
    // pop() 
    // peek()
    // isEmpty()
    // clear()
    // size()

    this.push = function (element) {
        items.push(element)
    }

    this.pop = function () {
        return items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.isEmpty = function (){
        return items.length == 0
    }

    this.clear = function() {
        return items = []
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items)
    }
}

// 导出 Stack Class
module.exports = Stack;

