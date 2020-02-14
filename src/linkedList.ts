import { Sorter } from './sorter';
class NodeLL {
    next: NodeLL | null = null;
    constructor(public data: number) {}
}
export class LinkedList extends Sorter {
    head: NodeLL | null = null;
    add(data: number): void {
        const node = new NodeLL(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length(): number {
        if (!this.head) return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index: number): NodeLL {
        if (!this.head) {
            throw new Error('Index out of bound');
        }
        let counter = 0;
        let node: NodeLL | null = this.head;
        while (node) {
            if (counter == index) return node;
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bound!');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) throw new Error('List Is Empty');
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex: number, rightIndex: number): void {
        if (!this.head) throw new Error('List Is Empty');
        const leftHand = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHand;
    }
    print(): void {
        if (!this.head) return;
        let node: NodeLL | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
