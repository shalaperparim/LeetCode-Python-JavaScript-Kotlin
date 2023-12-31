// JavaScript solution
var myAtoi = function(s) {
    // Initialize the result as 0
    let result = 0;
    // Initialize the sign as positive
    let sign = 1;
    // Initialize the index as 0
    let index = 0;
    // Skip any leading whitespace
    while (index < s.length && s[index] == ' ') {
        index++;
    }
    // Check if the next character is '-' or '+'[^1^][1]
    if (index < s.length && (s[index] == '-' || s[index] == '+')) {
        // Update the sign accordingly
        sign = s[index] == '-' ? -1 : 1;
        // Move to the next character
        index++;
    }
    // Loop until the next non-digit character or the end of the string[^2^][2]
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        // Get the current digit
        let digit = s[index] - '0';
        // Check if the result will overflow
        if (result > Math.floor(Number.MAX_SAFE_INTEGER / 10) || (result == Math.floor(Number.MAX_SAFE_INTEGER / 10) && digit > Number.MAX_SAFE_INTEGER % 10)) {
            // Return the maximum or minimum value depending on the sign
            return sign == 1 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
        }
        // Update the result by appending the digit
        result = result * 10 + digit;
        // Move to the next character
        index++;
    }
    // Return the result with the sign
    return result * sign;
};
