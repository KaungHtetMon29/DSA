// TNode means tree node
namespace BST {
  class TNode {
    private _value: number;
    private _left: TNode | null;
    private _right: TNode | null;

    public get value(): number {
      return this._value;
    }

    public set value(v: number) {
      this._value = v;
    }
    public get left(): TNode | null {
      return this._left;
    }

    public set left(v: TNode) {
      this._left = v;
    }
    public get right(): TNode | null {
      return this._right;
    }

    public set right(v: TNode) {
      this._right = v;
    }
    constructor(value: number) {
      this._value = value;
      this._left = null;
      this._right = null;
    }
  }

  class BinarySearchTree {
    private _root: TNode | null;

    public get root(): TNode | null {
      return this._root;
    }

    public set root(v: TNode) {
      this._root = v;
    }
    constructor() {
      this._root = null;
    }
    addNode(value: number): boolean | undefined {
      const newNode = new TNode(value);
      if (this._root === null) {
        console.log("begin");
        this.root = newNode;
        return true;
      } else {
        let currentNode = this._root;
        let traversing = true;
        while (traversing) {
          if (currentNode.value === newNode.value) {
            traversing = false;
            return false;
          } else if (currentNode.value > newNode.value) {
            console.log("greater");
            if (currentNode.right === null) {
              currentNode.right = newNode;
              return true;
            } else {
              currentNode = currentNode.right!;
            }
          } else if (currentNode.value < newNode.value) {
            console.log("less");

            if (currentNode.left === null) {
              currentNode.left = newNode;
              return true;
            } else {
              currentNode = currentNode.left!;
            }
          }
        }
      }
    }
  }
  const bst = new BinarySearchTree();

  bst.addNode(2);
  bst.addNode(1);
  bst.addNode(3);
  console.log(bst);
}
