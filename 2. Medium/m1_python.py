# Python solution
# Time complexity: O(max(m, n)), where m and n are the lengths of the two linked lists
# Space complexity: O(max(m, n)), as the output list has the same length as the longer input list

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    # Initialize a dummy node to start the output list
    dummy = ListNode()
    # Initialize a pointer to the current node of the output list
    curr = dummy
    # Initialize a variable to store the carry
    carry = 0
    # Loop until both input lists are exhausted or the carry is nonzero
    while l1 or l2 or carry:
        # Get the values of the current nodes of the input lists, or 0 if they are None
        x = l1.val if l1 else 0
        y = l2.val if l2 else 0
        # Compute the sum of the values and the carry
        s = x + y + carry
        # Update the carry
        carry = s // 10
        # Create a new node with the value of the sum modulo 10
        node = ListNode(s % 10)
        # Append the new node to the output list
        curr.next = node
        # Move the pointer to the next node
        curr = curr.next
        # Move the pointers of the input lists to the next nodes, if they exist
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    # Return the output list, skipping the dummy node
    return dummy.next
