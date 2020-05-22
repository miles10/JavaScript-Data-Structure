// 队列类
function Queue(){
    let items = []

    // 队列方法
    // enqueue(element) 添加一个元素
    // dequeue() 移除队列第一个元素 并返回
    // front() 返回队列第一个元素
    // isEmpty() 判断是否为空 空为true  不空为false
    // size() 队列长度
    this.enqueue = function (element) {
        items.push(element)
    }

    this.dequeue = function () {
        return items.shift()
    }

    this.front = function () {
        return items[0]
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items)
    }
}


// 优先队列
function PriorityQueue(){
    let items = []

    
}

// 导出 Queue Class
module.exports = Queue;