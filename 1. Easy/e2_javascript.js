// JavaScript solution
function addBinary(a, b) {
    // Initialize an empty result string
    let result = "";
    // Initialize carry as 0
    let carry = 0;
    // Initialize two pointers at the end of each string
    let i = a.length - 1;
    let j = b.length - 1;
    // Loop until both pointers reach the beginning or carry is non-zero
    while (i >= 0 || j >= 0 || carry > 0) {
        // Add the bits at the current positions of both strings and the carry
        let sum = carry;
        if (i >= 0) sum += Number(a[i]);
        if (j >= 0) sum += Number(b[j]);
        // Update the result with the remainder of the sum (0 or 1)
        result = (sum % 2) + result;
        // Update the carry with the quotient of the sum (0 or 1)
        carry = Math.floor(sum / 2);
        // Move the pointers to the left
        i--;
        j--;
    }
    // Return the result
    return result;
}

// Time complexity: O(max(a.length, b.length))
// Space complexity: O(max(a.length, b.length))
