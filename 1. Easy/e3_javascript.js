// A similar approach as Python, but using a different syntax
// Time complexity: O(n^2), where n is the length of the string
// Space complexity: O(1), no extra space needed

function longestPalindrome(s) {
    // Initialize the result as the first character
    let result = s[0];
    // Loop over the string from index 1 to n-1
    for (let i = 1; i < s.length - 1; i++) {
      // Check for odd-length palindrome centered at i
      let odd = expand(s, i, i);
      // Check for even-length palindrome centered at i and i+1
      let even = expand(s, i, i + 1);
      // Update the result if a longer palindrome is found
      if (odd.length > result.length) {
        result = odd;
      }
      if (even.length > result.length) {
        result = even;
      }
    }
    // Return the result
    return result;
  }
  
  // Helper function to expand a palindrome from the center
  function expand(s, left, right) {
    // While the left and right pointers are within the string and the characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Move the pointers outward
      left--;
      right++;
    }
    // Return the substring from left+1 to right-1
    return s.substring(left + 1, right);
  }
  