// Queue = First is First out = FIFO
class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue[this.queue.length] = item;
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}

const myQueue = new Queue();

myQueue.enqueue("Imran");
myQueue.enqueue("Rakib");
myQueue.enqueue("Rana");
myQueue.enqueue("Bappy");
myQueue.enqueue("Hashif");

console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.queue);