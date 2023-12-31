// Kotlin solution
fun myAtoi(s: String): Int {
    // Initialize the result as 0
    var result = 0
    // Initialize the sign as positive
    var sign = 1
    // Initialize the index as 0
    var index = 0
    // Skip any leading whitespace
    while (index < s.length && s[index] == ' ') {
        index++
    }
    // Check if the next character is '-' or '+'[^1^][1]
    if (index < s.length && (s[index] == '-' || s[index] == '+')) {
        // Update the sign accordingly
        sign = if (s[index] == '-') -1 else 1
        // Move to the next character
        index++
    }
    // Loop until the next non-digit character or the end of the string[^2^][2]
    while (index < s.length && s[index].isDigit()) {
        // Get the current digit
        val digit = s[index] - '0'
        // Check if the result will overflow
        if (result > Int.MAX_VALUE / 10 || (result == Int.MAX_VALUE / 10 && digit > Int.MAX_VALUE % 10)) {
            // Return the maximum or minimum value depending on the sign
            return if (sign == 1) Int.MAX_VALUE else Int.MIN_VALUE
        }
        // Update the result by appending the digit
        result = result * 10 + digit
        // Move to the next character
        index++
    }
    // Return the result with the sign
    return result * sign
}
