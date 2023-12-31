// Kotlin solution
// Time complexity: O(max(m, n)), where m and n are the lengths of the two linked lists
// Space complexity: O(max(m, n)), as the output list has the same length as the longer input list

// Define a class for the linked list nodes
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
    // Initialize a dummy node to start the output list
    val dummy = ListNode(0)
    // Initialize a pointer to the current node of the output list
    var curr = dummy
    // Initialize a variable to store the carry
    var carry = 0
    // Loop until both input lists are exhausted or the carry is nonzero
    var p1 = l1
    var p2 = l2
    while (p1 != null || p2 != null || carry != 0) {
        // Get the values of the current nodes of the input lists, or 0 if they are null
        val x = p1?.`val` ?: 0
        val y = p2?.`val` ?: 0
        // Compute the sum of the values and the carry
        val s = x + y + carry
        // Update the carry
        carry = s / 10
        // Create a new node with the value of the sum modulo 10
        val node = ListNode(s % 10)
        // Append the new node to the output list
        curr.next = node
        // Move the pointer to the next node
        curr = curr.next!!
        // Move the pointers of the input lists to the next nodes, if they exist
        p1 = p1?.next
        p2 = p2?.next
    }
    // Return the output list, skipping the dummy node
    return dummy.next
}
