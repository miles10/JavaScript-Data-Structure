// 通过队列实现击鼓传花
let Queue = require('./QueueClass.js').Queue;

// 实现击鼓传花的函数
function PassGame(namelist, num){
    // 存储姓名进入队列
    let queue = new Queue()

    for(let i = 0; i < namelist.length; i++){
        queue.enqueue(namelist[i])
    }

    // 数组计数从0开始 num-1
    num = num - 1
    while(queue.size() > 1){
        //  取出 前num项 放入队尾
        for(let j = 0; j < num; j++){
            queue.enqueue(queue.dequeue())
        }
        // 删除第num项
        queue.dequeue()

    }
    // 返回此人的名称
    return queue.dequeue()
}

namelist = ["a", "b" , "c", "d", "e"]
console.log(PassGame(namelist, 2))