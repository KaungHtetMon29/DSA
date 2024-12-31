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

    public set right(v: TNode | null) {
      this._right = v;
    }

    public set left(v: TNode | null) {
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
    delete(value: number) {
      this._root = this.deleteNode(value, this.root!);
      return this.root;
    }
    private deleteNode(value: number, node: TNode | null): TNode | null {
      if (node === null) {
        return null;
      }
      if (value > node.value) {
        node.right = this.deleteNode(value, node.right);
      } else if (value < node.value) {
        node.left = this.deleteNode(value, node.left);
      } else {
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        const rightMin = this.findMin(node.right);
        node.value = rightMin.value;
        node.right = this.deleteNode(rightMin.value, node.right);
      }
      return node;
    }
    findMin(node: TNode) {
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
