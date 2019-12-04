
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var current = 0, //val
      list = null, 
      last = null; //node
  
  
  while(l1 || l2) {
      if (l1 && (!l2 || l1.val<=l2.val)){
          current = l1.val;
          l1 = l1.next;
      } else {
          current = l2.val;
          l2 = l2.next;
      }
      
      if (last) {
         last.next = new ListNode(current);
         last = last.next;
     } else {
         list = new ListNode(current);
         last = list;
     }
  }
  
  return list;
  
};