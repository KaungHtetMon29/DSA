namespace BinaryTreeTest {
  class TNode {
    private _value: number;
    private _right: TNode | null;
    private _left: TNode | null;
    constructor(value: number) {
      this._value = value;
      this._left = null;
      this._right = null;
    }
    public set value(v: number) {
      this._value = v;
    }

    public set right(v: TNode) {
      this._right = v;
    }

    public set left(v: TNode) {
      this._left = v;
    }

    public get value(): number {
      return this._value;
    }

    public get right(): TNode | null {
      return this._right;
    }
    public get left(): TNode | null {
      return this._left;
    }
  }
  class BinarySearchTree {
    private _root: TNode | null;
    constructor() {
      this._root = null;
    }

    public set root(v: TNode) {
      this._root = v;
    }

    public get root(): TNode | null {
      return this._root;
    }
    addNode(value: number) {
      const node = new TNode(value);
      if (this._root === null) {
        this._root = node;
      } else {
        let currentNode = this._root;
        let traversing = true;
        while (traversing) {
          if (currentNode.value === node.value) {
            traversing = false;
          } else if (currentNode.value > node.value) {
            if (currentNode.left === null) {
              currentNode.left = node;
              traversing = false;
            } else {
              currentNode = currentNode.left;
            }
          } else if (currentNode.value < node.value) {
            if (currentNode.right === null) {
              currentNode.right = node;
              traversing = false;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }
  const BST = new BinarySearchTree();
  BST.addNode(3);
  BST.addNode(1);
  BST.addNode(2);
  BST.addNode(4);
  console.log(BST);
}
