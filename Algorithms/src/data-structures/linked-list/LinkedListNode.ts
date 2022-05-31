interface ILinkedListNode {
  value: any;
  next: ILinkedListNode | null;
}

/**
 * LinkedList 的 单个节点
 */
export default class LinkedListNode {
  value: any;
  next: ILinkedListNode | null;

  constructor(value: any, next: ILinkedListNode) {
    this.value = value;
    this.next = !!next ? next : null;
  }

  toString(callback?: Function): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
