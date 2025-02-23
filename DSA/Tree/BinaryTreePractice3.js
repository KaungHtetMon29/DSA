var BinaryTreePractice3;
(function (BinaryTreePractice3) {
    var TNode = /** @class */ (function () {
        function TNode() {
            this._value = "";
            this._left = null;
            this._right = null;
        }
        Object.defineProperty(TNode.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TNode.prototype, "right", {
            get: function () {
                return this._right;
            },
            set: function (value) {
                this._right = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TNode.prototype, "left", {
            get: function () {
                return this._left;
            },
            set: function (value) {
                this._left = value;
            },
            enumerable: false,
            configurable: true
        });
        return TNode;
    }());
    var BinarySearchTree = /** @class */ (function () {
        function BinarySearchTree() {
            this._root = null;
        }
        Object.defineProperty(BinarySearchTree.prototype, "root", {
            get: function () {
                return this._root;
            },
            set: function (value) {
                this._root = value;
            },
            enumerable: false,
            configurable: true
        });
        BinarySearchTree.prototype.addNode = function (value) {
            var newNode = new TNode();
            newNode.value = value;
            if (this._root === null) {
                this._root = newNode;
            }
            else {
                var currentNode = this._root;
                var traverse = true;
                while (traverse) {
                    if (newNode.value > currentNode.value) {
                        if (currentNode.right === null) {
                            currentNode.right = newNode;
                            traverse = false;
                        }
                        else {
                            currentNode = currentNode.right;
                        }
                    }
                    else if (newNode.value < currentNode.value) {
                        if (currentNode.left === null) {
                            currentNode.left = newNode;
                            traverse = false;
                        }
                        else {
                            currentNode = currentNode.left;
                        }
                    }
                    else {
                        traverse = false;
                    }
                }
            }
        };
        BinarySearchTree.prototype.BSFR = function (queue, list) {
            if (queue.length === 0) {
                return list;
            }
            var currentNode = queue.shift();
            list.push(currentNode === null || currentNode === void 0 ? void 0 : currentNode.value);
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.right) {
                queue.push(currentNode.right);
            }
            return this.BSFR(queue, list);
        };
        return BinarySearchTree;
    }());
    var BiTreetest = new BinarySearchTree();
    BiTreetest.addNode("e");
    BiTreetest.addNode("a");
    BiTreetest.addNode("g");
    BiTreetest.addNode("b");
    BiTreetest.addNode("c");
    BiTreetest.addNode("d");
    BiTreetest.addNode("f");
    BiTreetest.addNode("h");
    console.log(BiTreetest);
    console.log(BiTreetest.BSFR([BiTreetest.root], []));
})(BinaryTreePractice3 || (BinaryTreePractice3 = {}));
