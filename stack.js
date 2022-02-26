// Queue = Last is Frst out = LIFO

class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack[this.stack.length] = item;
    }
    remove() {
        const last = this.stack[this.stack.length - 1];
        this.stack.length = this.stack.length - 1
        return last;
    }
}

const myStack = new Stack();

myStack.add("Imran");
myStack.add("Rakib");
myStack.add("Rana");
myStack.add("Bappy");
myStack.add("Hashif");

console.log(myStack.stack);

console.log(myStack.remove());
console.log(myStack.stack);

// console.log(myStack.remove());
// console.log(myStack.stack);