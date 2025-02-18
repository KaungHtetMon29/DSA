namespace BinaryTreeTest2 {
  class TNode {
    private _value: string = "";
    private _right: TNode | null = null;
    private _left: TNode | null = null;

    public get value(): string {
      return this._value;
    }
    public set value(value: string) {
      this._value = value;
    }
    public get right(): TNode | null {
      return this._right;
    }
    public get left(): TNode | null {
      return this._left;
    }
    public set right(node: TNode) {
      this._right = node;
    }
    public set left(node: TNode) {
      this._left = node;
    }
  }
  class BinaryTree {
    private _root: TNode | null = null;
    public set root(node: TNode) {
      this._root = node;
    }
    public get root(): TNode | null {
      return this._root;
    }
    addNode(value: string): boolean | undefined {
      const newNode = new TNode();
      newNode.value = value;
      if (this._root === null) {
        this._root = newNode;
        return true;
      } else {
        let currentNode = this._root;
        let traverse = true;
        while (traverse) {
          if (currentNode === newNode) {
            traverse = false;
            return true;
          } else if (currentNode < newNode) {
            if (currentNode.right === null) {
              currentNode.right = newNode;
              return true;
            } else {
              currentNode = currentNode.right;
            }
          } else if (currentNode > newNode) {
            if (currentNode.left === null) {
              currentNode.left = newNode;
              return true;
            } else {
              currentNode = currentNode.left;
            }
          }
        }
      }
    }
    delete(value: string): TNode | null {
      this._root = this.deleteNode(value, this._root);
      return this._root;
    }

    deleteNode(value: string, node: TNode | null): TNode | null {}
  }
}
