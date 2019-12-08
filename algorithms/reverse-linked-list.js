
// [1,2,3, null] to [3,2,1, null]

// Iterative 

const reverseLinkedList = function(head) {
  let prev = null;
  let current = head;
  let next = null;

  while(current !== null) {
    
    // Save next
    next = current.next; // 

    // Reverse
    current.next = prev;

    // Advance prev and currentq
    prev = current;
    current = next;

  }
  return prev;
}
