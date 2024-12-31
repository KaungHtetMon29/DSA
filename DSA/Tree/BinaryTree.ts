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

    public set right(v: TNode | null) {
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
        this.root = newNode;
        return true;
      } else {
        let currentNode = this._root;
        let traversing = true;
        while (traversing) {
          if (currentNode.value === newNode.value) {
            traversing = false;
            return false;
          } else if (currentNode.value < newNode.value) {
            if (currentNode.right === null) {
              currentNode.right = newNode;
              return true;
            } else {
              currentNode = currentNode.right!;
            }
          } else if (currentNode.value > newNode.value) {
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
    delete(value: number) {
      this._root = this.deleteNode(value, this._root!);
    }
    private deleteNode(value: number, root: TNode): TNode | null {
      if (root === null) {
        return null;
      }
      if (value > root.value) {
        root.right = this.deleteNode(value, root.right!)!;
      } else if (value < root.value) {
        root.left = this.deleteNode(value, root.left!)!;
      } else {
        if (root.left === null) {
          return root.right;
        }
        if (root.right === null) {
          return root.left;
        }
        const min = this.findMin(value, root.right);
        root.value = min.value;
        root.right = this.deleteNode(min.value, root.right);
      }
      return root;
    }
    findMin(value: number, node: TNode) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }
  const bst = new BinarySearchTree();
  const dummy = [20, 15, 25, 10, 17, 8, 12, 16, 19, 21, 28, 27, 29];
  dummy.map((e) => bst.addNode(e));
  bst.delete(10);
  console.log(bst.root?.left?.left);
}
