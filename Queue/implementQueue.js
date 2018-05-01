function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

function Queue() {
  this.first = null;
  this.last = null;
}

Queue.prototype.queue = function(data) {
  // If is first element
  if(!this.first) {
    this.last = new Node(data);
    this.first = this.last;
  } else {
    this.last.next = new Node(data);
    this.last = this.last.next;
  }
}

Queue.prototype.dequeue = function() {
  // If we have elements in the queue
  if(this.first) {
    let item = this.first.data;
    this.first = this.first.next;
    return item;
  }
  return null;
}

let queue = new Queue();
queue.queue(1);
queue.queue(2);
queue.queue(3);
queue.queue(4);
queue.queue(5);
console.log(queue);
queue.queue(6);
queue.dequeue();
queue.dequeue();
queue.dequeue();