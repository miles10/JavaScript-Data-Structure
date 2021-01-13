// 队列类
function DoublyLinkedList(){
    // Node 类 存储每个节点信息
    function Node(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    // 链表属性
    this.length = 0;
    this.head = null;
    // 尾部指针
    this.tail = null;

    // 队列方法
    // append(element) 添加一个元素
    // insert(element, position) 指定位置插入一个新项
    // remove(position)
    // indexOf(element) 查询element 索引  不存在则返回-1
    // removeElment(element)
    // isEmpty()
    // size()
    // toString() 输出时 只输出元素值 不输出next
    
    DoublyLinkedList.prototype.append = function (element) {
        let newNode = new Node(element);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    
}
// 导出 Queue Class
module.exports = {DoublyLinkedList: DoublyLinkedList};

