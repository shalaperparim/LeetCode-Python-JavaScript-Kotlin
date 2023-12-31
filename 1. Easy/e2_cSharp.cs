// C# solution
public string AddBinary(string a, string b) {
    // Initialize an empty result string
    string result = "";
    // Initialize carry as 0
    int carry = 0;
    // Initialize two pointers at the end of each string
    int i = a.Length - 1;
    int j = b.Length - 1;
    // Loop until both pointers reach the beginning or carry is non-zero
    while (i >= 0 || j >= 0 || carry > 0) {
        // Add the bits at the current positions of both strings and the carry
        int sum = carry;
        if (i >= 0) sum += a[i] - '0';
        if (j >= 0) sum += b[j] - '0';
        // Update the result with the remainder of the sum (0 or 1)
        result = (sum % 2) + result;
        // Update the carry with the quotient of the sum (0 or 1)
        carry = sum / 2;
        // Move the pointers to the left
        i--;
        j--;
    }
    // Return the result
    return result;
}

// Time complexity: O(max(a.length, b.length))
// Space complexity: O(max(a.length, b.length))
