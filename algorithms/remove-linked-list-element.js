/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let current = head;
  let prev = null;
  
  while(current !== null){
      
      if(current.val == val){
          if(prev !== null){
              prev.next = current.next;
          } else {
              head = current.next;
          }
      } else {
          prev = current;
      }
      current = current.next;
  }
  
  return head;
};