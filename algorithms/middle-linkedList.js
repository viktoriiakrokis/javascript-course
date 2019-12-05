/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    let count = 0;
    while(current !== null) {
        count++;
        current = current.next;
    }
    
    var middle = Math.floor(count/2);
    count = 0;
    current = head;
    while(current !== null) {
        
        
        
        
        if(count === middle){
            return current;
        }
        count++;
        current = current.next;
    }
    
    return head;
};