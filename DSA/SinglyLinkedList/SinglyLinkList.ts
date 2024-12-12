class SinglyLinkedList {
  head: ListNode;
  tail: ListNode;
  length: number;
  constructor(value: any) {
    const newNode = new ListNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  prepend(value: any) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  append(value: any) {
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  insert(index: number, value: any) {
    const newNode = new ListNode(value);
    let segment = this.head;
    if (index === 1) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      for (let i = 1; i < index; i++) {
        if (segment && segment.next) {
          segment = segment.next;
        }
      }
    }
    let buffer = segment.next;
    segment.next = newNode;
    newNode.next = buffer;
    this.length++;
  }

  remove(index: number) {
    let segment = this.head;
    if (index === 1) {
      if (this.head && this.head.next) this.head = this.head.next;
    } else {
      for (let i = 2; i < index; i++) {
        if (segment && segment.next) {
          segment = segment.next;
        }
      }
      if (segment && segment.next) {
        segment.next = segment.next?.next;
      }
    }
  }

  printList() {
    const arr = [];
    let segment = this.head;
    for (let i = 1; i < this.length; i++) {
      arr.push(segment.value);
      if (segment && segment.next) {
        segment = segment.next;
      }
    }
    console.log(arr);
  }
}
class ListNode {
  value: any;
  next: ListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
const singlyLinkedList = new SinglyLinkedList(10);
singlyLinkedList.append(5);
singlyLinkedList.append(16);
singlyLinkedList.append(17);
singlyLinkedList.append(18);
singlyLinkedList.remove(5);
// singlyLinkedList.remove(2);
singlyLinkedList.printList();
console.log(singlyLinkedList);
