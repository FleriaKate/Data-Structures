//create a queue data structure.THe queue
//should be a class with methods'add' and 'remove'.
//adding to the queue should store an element untill
//it is removed
//---Examples
//const q = new Queue();
//q.add(1);
//q.remove();//returns 1;

[10,1,2,3,,5,6,7,8]

class Queue {
    constructor() {
        this.data = []
    }
    add (record) {
        this.data.unshift(record)
    }
    remove(){
        return this.data.pop()
    }
}
 const q = new Queue
