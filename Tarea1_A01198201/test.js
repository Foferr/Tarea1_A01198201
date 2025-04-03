const Stack = require('./stack');
const Queue = require('./queue');
const HashTable = require('./hashtable');

// Casos de prueba

console.log("=== STACK ===");
const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log("Top:", stack.peek()); 
console.log("Pop:", stack.pop()); 
console.log("Size:", stack.size()); 

console.log("\n=== QUEUE ===");
const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
console.log("Front:", queue.front()); 
console.log("Dequeue:", queue.dequeue()); 
console.log("Size:", queue.size()); 

console.log("\n=== HASH TABLE ===");
const table = new HashTable();
table.set("nombre", "Rodolfo");
table.set("edad", 22);
table.set("ciudad", "Monterrey");
console.log("Nombre:", table.get("nombre")); 
console.log("Keys:", table.keys()); 
console.log("Entries:", table.entries()); 

