// JavaScript solution
// Time complexity: O(max(m, n)), where m and n are the lengths of the two linked lists
// Space complexity: O(max(m, n)), as the output list has the same length as the longer input list

// Define a class for the linked list nodes
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function addTwoNumbers(l1, l2) {
    // Initialize a dummy node to start the output list
    let dummy = new ListNode();
    // Initialize a pointer to the current node of the output list
    let curr = dummy;
    // Initialize a variable to store the carry
    let carry = 0;
    // Loop until both input lists are exhausted or the carry is nonzero
    while (l1 || l2 || carry) {
      // Get the values of the current nodes of the input lists, or 0 if they are null
      let x = l1 ? l1.val : 0;
      let y = l2 ? l2.val : 0;
      // Compute the sum of the values and the carry
      let s = x + y + carry;
      // Update the carry
      carry = Math.floor(s / 10);
      // Create a new node with the value of the sum modulo 10
      let node = new ListNode(s % 10);
      // Append the new node to the output list
      curr.next = node;
      // Move the pointer to the next node
      curr = curr.next;
      // Move the pointers of the input lists to the next nodes, if they exist
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
    // Return the output list, skipping the dummy node
    return dummy.next;
  }
  