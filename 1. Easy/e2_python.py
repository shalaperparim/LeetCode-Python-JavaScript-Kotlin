# Python solution
def addBinary(a, b):
    # Initialize an empty result string
    result = ""
    # Initialize carry as 0
    carry = 0
    # Initialize two pointers at the end of each string
    i = len(a) - 1
    j = len(b) - 1
    # Loop until both pointers reach the beginning or carry is non-zero
    while i >= 0 or j >= 0 or carry > 0:
        # Add the bits at the current positions of both strings and the carry
        sum = carry
        if i >= 0: sum += int(a[i])
        if j >= 0: sum += int(b[j])
        # Update the result with the remainder of the sum (0 or 1)
        result = str(sum % 2) + result
        # Update the carry with the quotient of the sum (0 or 1)
        carry = sum // 2
        # Move the pointers to the left
        i -= 1
        j -= 1
    # Return the result
    return result

# Time complexity: O(max(len(a), len(b)))
# Space complexity: O(max(len(a), len(b)))
