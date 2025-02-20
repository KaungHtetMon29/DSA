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
    public set right(node: TNode | null) {
      this._right = node;
    }
    public set left(node: TNode | null) {
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
          if (currentNode.value === newNode.value) {
            traverse = false;
            return true;
          } else if (currentNode.value < newNode.value) {
            if (currentNode.right === null) {
              currentNode.right = newNode;
              return true;
            } else {
              currentNode = currentNode.right;
            }
          } else if (currentNode.value > newNode.value) {
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
      this._root = this.deleteNodeR(value, this._root);
      return this._root;
    }

    private deleteNodeR(value: string, node: TNode | null): TNode | null {
      if (node === null) {
        return null;
      }
      if (value > node.value) {
        node.right = this.deleteNodeR(value, node.right);
      } else if (value < node.value) {
        node.left = this.deleteNodeR(value, node.left);
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
        const rightMin = this.findMin(node.right);
        node.value = rightMin.value;
        node.right = this.deleteNodeR(rightMin.value, node.right);
      }
      return node;
    }
    findMin(node: TNode) {
      while (node.left !== null) {
        return node.left;
      }
      return node;
    }

    BreadFirstSearchR(list: any[], queue: TNode[]): TNode[] {
      if (!queue.length) {
        return list;
      }
      let node = queue.shift();
      list.push(node?.value);
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
      return this.BreadFirstSearchR(list, queue);
    }
  }
  const Tree = new BinaryTree();
  console.log("Tree");
  Tree.addNode("e");
  Tree.addNode("a");
  Tree.addNode("g");
  Tree.addNode("b");
  Tree.addNode("c");
  Tree.addNode("d");
  Tree.addNode("f");
  Tree.addNode("h");
  console.log("added Tree");
  Tree.delete("g");
  console.log(Tree.BreadFirstSearchR([], [Tree.root as TNode]));
}
