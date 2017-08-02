/**
 * Created by joshuabrown on 8/1/17.
 */
function LinkedList() {
  // head property pointer
  this.head = null;
  // tail property pointer
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value; // the information stored in the Node
  this.next = next; //
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);

  // if ll is occupied connect new head, next and prev of old head are organized
  // then new head points to old head for next.
  // then head pointer points to new head.
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  // if ll is occupied connect new tail, next and prev of old head are organized
  // then new tail points to old tail for prev.
  // then tail pointer points to new tail.
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  var value;

  if (!this.head) {
    return null;
  }
  value = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return value;
};

LinkedList.prototype.removeTail = function() {
  var value;

  if (!this.tail) {
    return null;
  }
  value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

/**
 * indexOf
 * @param searchValue
 * @returns {Array} of indices of the linked list that contain the searchValue
 */
LinkedList.prototype.indexOf = function(searchValue) {
  var result = [], // a place to push the indices of the ll nodes that have that value
      index = 0,
      currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) {
      result.push(index);
    }
    index++;
    currentNode = currentNode.next;
  }
  return result;
};


var ll = new LinkedList();

ll.addToHead(8);
ll.addToHead(3);
ll.addToHead(5);
ll.addToHead(3);

console.log(ll.indexOf(3)); // [ 0, 2 ]
