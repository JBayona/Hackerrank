/*

You have an empty sequence, and you will be given  queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.

*/

function Stack(){
    this.stack = [];
    this.max = null;
    this.tmp = [];
}

Stack.prototype.getMax = function (){
    //console.log(this.stack[this.stack.length-1]);
    return this.tmp[this.tmp.length-1];
}

Stack.prototype.add = function(num){
    this.max = this.max ? Math.max(this.max, num) : num;
    this.stack.push(num);
    this.tmp.push(this.max);
}

Stack.prototype.pop = function(){
    this.stack.pop();
    this.tmp.pop();
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(10);
stack.add(7);
stack.add(8);
console.log(stack);
console.log(stack.getMax());
stack.pop();