class Node {
    constructor(value, previous = null) {
        this.previous = previous;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(node) {
        this.head = node
    }
    add(node) {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = new Node(node, currentNode.value)
    }
    remove(value) {
        var currentNode = this.head;
        let previous = null;
        while (currentNode.next) {
            if (currentNode.value === value) {
                previous.next = currentNode.next
                break;
            }
            previous = currentNode
            currentNode = currentNode.next;
        }
    }
}
const myN = new Node(100);
const myList = new LinkedList(myN);

myList.add(200);
myList.add(300)
myList.add(400)
myList.add(500)
console.log(JSON.stringify(myList.head));
myList.remove(200)
console.log(JSON.stringify(myList.head));

// const nodes = { head: { value: 100, next: { value: 200, next: { value: 300, next: { value: 400, next: null } } } } }

// console.log(JSON.stringify(nodes));