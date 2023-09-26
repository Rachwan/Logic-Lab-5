class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        let result = "";
        if (this.head == null) {
            console.log("empty");
        } else {
            while (current) {
                result += current.value + " ";
                current = current.next;
            }
            console.log(result);
        }
    }
    search(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current.value;
            }
            current = current.next;
        }

        return null;
    }
}
let newLinkedList = new LinkedList();
newLinkedList.add(1);
newLinkedList.add(2);
newLinkedList.print();
newLinkedList.search();
const result = LinkedList.search(2);
console.log(result);