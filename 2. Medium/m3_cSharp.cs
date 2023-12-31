// C# solution
public int MyAtoi(string s) {
    // Initialize the result as 0
    int result = 0;
    // Initialize the sign as positive
    int sign = 1;
    // Initialize the index as 0
    int index = 0;
    // Skip any leading whitespace
    while (index < s.Length && s[index] == ' ') {
        index++;
    }
    // Check if the next character is '-' or '+'[^1^][1]
    if (index < s.Length && (s[index] == '-' || s[index] == '+')) {
        // Update the sign accordingly
        sign = s[index] == '-' ? -1 : 1;
        // Move to the next character
        index++;
    }
    // Loop until the next non-digit character or the end of the string[^2^][2]
    while (index < s.Length && char.IsDigit(s[index])) {
        // Get the current digit
        int digit = s[index] - '0';
        // Check if the result will overflow
        if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && digit > int.MaxValue % 10)) {
            // Return the maximum or minimum value depending on the sign
            return sign == 1 ? int.MaxValue : int.MinValue;
        }
        // Update the result by appending the digit
        result = result * 10 + digit;
        // Move to the next character
        index++;
    }
    // Return the result with the sign
    return result * sign;
}
