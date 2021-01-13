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

    // 封装构造函数 保存元素 和元素优先级
    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    }


    // 添加元素方法
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)
        if(this.isEmpty()){
            items.push(queueElement)
        }else{
            let added = false
            for(let i = 0; i < items.length; i++){
                if(queueElement.priority < items[i].priority ){
                    items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            // 结束循环 若元素未添加
            if(added == false){
                items.push(queueElement)
            }
        }
    }

    // 删除元素的方法
    this.dequeue = function () {
        return items.shift()
    }

    // 获取前端的元素
    this.front = function () {
        return items[0]
    }

    // 查看元素是否为空
    this.isEmpty = function () {
        return items.length == 0
    }

    // 获取元素的个数
    this.size = function () {
        return items.length
    }

    this.print = function () {
        console.log(items)
    }
    
}

// 导出 Queue Class
module.exports = {Queue: Queue, 
                PriorityQueue: PriorityQueue};

