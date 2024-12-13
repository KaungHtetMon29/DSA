class PSinglyLinkedList {
  length: number = 0;
  head: LinkedListNode;
  tail: LinkedListNode;
  constructor(params: any) {
    const node = new LinkedListNode(params);
    this.head = node;
    this.tail = node;
    this.length++;
  }
  append(value: any) {
    const node = new LinkedListNode(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value: any) {
    const node = new LinkedListNode(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  insert(index: number, value: any) {
    if (index === 1) {
      this.prepend(value);
    } else if (index > this.length) {
      this.append(value);
    } else {
      const node = new LinkedListNode(value);
      let segment = this.head;
      const buffer = this.traverse(index).next;
      segment.next = node;
      console.log(segment);
      node.next = buffer;
      this.length++;
    }
  }
  remove(index: number) {
    let segment = this.traverse(index);
    if (segment && segment.next) {
      segment.next = segment.next?.next;
    }
    this.length--;
  }
  traverse(index: number) {
    let segment = this.head;
    for (let i = 2; i < index; i++) {
      if (segment && segment.next) {
        segment = segment.next;
      }
    }
    return segment;
  }
  printList() {
    let arr = [];
    let i = 1;
    let segment = this.head;
    while (i <= this.length) {
      arr.push(segment.value);
      if (segment && segment.next) {
        segment = segment.next;
      }
      i++;
    }
    return arr;
  }
}

class LinkedListNode {
  value: any;
  next: LinkedListNode | null;
  constructor(params: any) {
    this.value = params;
    this.next = null;
  }
}

const sampleLinkedList = new PSinglyLinkedList(1);
sampleLinkedList.append(2);
// sampleLinkedList.prepend(3);
sampleLinkedList.insert(3, 10);
sampleLinkedList.insert(2, 100);
sampleLinkedList.remove(4);
console.log(sampleLinkedList.printList());
console.log(sampleLinkedList);
