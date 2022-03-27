//Node
class Stack {
    constructor(elm){
      this.element = elm;
      this.next = null;
    }
  }
  
  class stackUsingLL {
    constructor(){
      this.length = 0;
      this.head = null;
    }
    
     //Push data in the stack
     push = (elm) => {
      //Create a new node
      let node = new Stack(elm),
      current;
      
      //Add the new node at the top
      current = this.head;
      node.next = current;
      this.head = node;
      
      this.length++;
    }
     
     //Pop the item from the stack
     pop = () => {
      let current = this.head;
      
      //If there is item then remove it 
      //and make the next element as the first
      if(current){
        let elm = current.element;
        current = current.next;
        this.head = current;
        this.length--;
        return elm;
      }
      
      return null;   
    }
    
    //Return the first element in the stack
    peek = () => {   
      if(this.head){    
        return this.head.element;
      }
  
      return null; 
    }
  
     check = () => {   
      var curr = this.head;
       while (curr) {
         console.log(curr.element);
      curr = curr.next;
       }
     }
  
  }
    
  
   let stack = new stackUsingLL();   //creating new instance of Stack
  stack.push('Milk');
  stack.push('Eggs');
  stack.push('Cereal');
  stack.check(); // Cereal , Eggs , Milk 
  stack.pop();
  console.log(" ");
  stack.check(); // Eggs , Milk
  console.log(" ");
  console.log(stack.peek()); // Egss
  
  
  
  