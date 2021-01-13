// 队列类 ES6
class Node{
    constructor(ele) {
        this.element = ele;
        this.next = null;
    }
}

class LinkedList{

    // 链表属性
    length = 0;
    head = null;

    // 队列方法
    // append(element) 添加一个元素
    // insert(element, position) 指定位置插入一个新项
    // remove(position)
    // indexOf(element) 查询element 索引  不存在则返回-1
    // removeElment(element)
    // isEmpty()
    // size()
    // toString() 输出时 只输出元素值 不输出next
    

    // 链表尾部追加元素方法
    append(element) {
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

    // 链表尾部追加元素方法
    insert(element, position) {
        // 1. 判断 position 与 链表位置关系
        if(position < 0 || position > this.length)
        {
            return false;
        }

        // 2. 存储新数据
        let newNode = new Node(element)
        let current = this.head
        let previous = null
        let index = 0

        // 3. 判断是否在第一个位置插入
        if(position == 0){
            newNode.next = current
            this.head = newNode
        } else {
            // 循环找到指定位置position 的点
            while(index < position)
            {
                previous = current
                current = current.next
                index = index + 1
            }

            previous.next = newNode
            newNode.next = current
        }

        // 链表增长
        this.length++
    }

    // 链表 toString 方法
    toString() {
        // 1.定义两个变量
        let current = this.head
        let listString = ""

        
        // 2. 循环获取链表元素
        while(current){
            listString = listString + current.element
            current = current.next
        }

        return listString
    }

    // 链表 根据 位置 remove 方法
   remove(position) {
        // 1. 判断 position 与 链表位置关系
        if(position < 0 || position > this.length)
        {
            return false;
        }

        let current = this.head
        let previous = null
        let index = 0

        if(position == 0){
            this.head = current.next
        } else {
            // 循环找到指定位置position 的点
            while(index < position)
            {
                previous = current
                current = current.next
                index = index + 1
            }

            previous.next = current.next

        }

        // 链表减少
        this.length--
        return current.element
    }

    // indexOf(element) 查询element 索引  不存在则返回-1
    indexOf(element){
        let current = this.head
        let index = 0
        
        while(current){
            if(current.element === element){
                return index
            }
            index = index+1
            current = current.next 
        }

        return -1
    }

    // 根据元素删除信息
    removeElment(element) {
        let index = this.indexOf(element)
        return this.remove(index)
    }

    // 判断链表是否为空
   isEmpty() {
        return this.length == 0
    }

    // 获取链表的长度
   size() {
        return this.length
    }

    // 获取第一个节点
   getFirst() {
        return this.head.element
    }
}
// 导出 LinkedList Class
export {LinkedList};

