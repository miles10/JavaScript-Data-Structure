// 队列类
function LinkedList(){
    // Node 类 存储每个节点信息
    function Node(element){
        this.element = element;
        this.next = null;
    }
    // 链表属性
    this.length = 0;
    this.head = numll;

    // 队列方法
    // append(element) 添加一个元素
    // insert(position, element) 指定位置插入一个新项
    // remove(element)
    // indexOf(element) 查询element 索引  不存在则返回-1
    // removeAt(position)
    // isEmpty()
    // size()
    // toString() 输出时 只输出元素值 不输出next
    
}
// 链表尾部追加元素方法
LinkedList.prototype.append = function (element) {
    let newNode = new Node(element)

    if(this.head === null){ // 列表为空
        this.head = newNode
    } else {  // 列表不为空
        let current = this.head
        while(current.next != null){
            current = current.next
        }
        current.next = newNode
    }

    // 链表增长
    this.length++
}

// 导出 Queue Class
module.exports = {LinkedList: LinkedList};

