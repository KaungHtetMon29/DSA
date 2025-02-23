namespace BinaryTreePractice3{
     class TNode{
          private _value: string|null="";
          private _left:TNode|null=null;
          private _right:TNode|null=null;

        public set value(value:string){
          this._value=value;
        }
          
        public get value():string|null{
          return this._value;
        }
        
        public set right(value:TNode){
          this._right=value;
        }
          
        public get right():TNode|null{
          return this._right;
        }
        public set left(value:TNode){
          this._left=value;
        }
          
        public get left():TNode|null{
          return this._left;
        }
     }

     class BinarySearchTree{
          private _root:TNode|null=null;
          public get root():TNode|null{
               return this._root;
          }
          public set root(value:TNode){
               this._root=value
          }
          addNode(value:string){
               const newNode=new TNode();
               newNode.value=value
               if(this._root===null){
                    this._root=newNode
               }else{
                    let currentNode=this._root;
                    let traverse=true;
                    while (traverse){
                         if(newNode.value>currentNode.value!){
                              if(currentNode.right===null){
                                   currentNode.right=newNode;
                                   traverse=false
                              }else{
                                   currentNode=currentNode.right
                              }
                         }else if(newNode.value<currentNode.value!){
                              if(currentNode.left===null){
                                   currentNode.left=newNode;
                                   traverse=false
                              }
                              else{
                                   currentNode=currentNode.left
                              }
                         }
                         else{traverse=false}
                    }
               }
          }
          public BSFR(queue:TNode[],list:string[]):string[]{
               if(queue.length===0){
                    return list;
               }
               let currentNode=queue.shift();
               list.push(currentNode?.value!)
               if(currentNode?.left){
                    queue.push(currentNode.left);
               }
               if(currentNode?.right){
                    queue.push(currentNode.right);
               }
               return this.BSFR(queue,list)
          }
     }

     const BiTreetest=new BinarySearchTree();
     BiTreetest.addNode("e");
  BiTreetest.addNode("a");
  BiTreetest.addNode("g");
  BiTreetest.addNode("b");
  BiTreetest.addNode("c");
  BiTreetest.addNode("d");
  BiTreetest.addNode("f");
  BiTreetest.addNode("h");
     console.log(BiTreetest)
     console.log(BiTreetest.BSFR([BiTreetest.root!],[]))
}