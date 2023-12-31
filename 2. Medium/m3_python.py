# Python solution
def myAtoi(s: str) -> int:
    # Initialize the result as 0
    result = 0
    # Initialize the sign as positive
    sign = 1
    # Initialize the index as 0
    index = 0
    # Skip any leading whitespace
    while index < len(s) and s[index] == ' ':
        index += 1
    # Check if the next character is '-' or '+'[^1^][1]
    if index < len(s) and (s[index] == '-' or s[index] == '+'):
        # Update the sign accordingly
        sign = -1 if s[index] == '-' else 1
        # Move to the next character
        index += 1
    # Loop until the next non-digit character or the end of the string[^2^][2]
    while index < len(s) and s[index].isdigit():
        # Get the current digit
        digit = int(s[index])
        # Check if the result will overflow
        if result > 2**31 // 10 or (result == 2**31 // 10 and digit > 2**31 % 10):
            # Return the maximum or minimum value depending on the sign
            return 2**31 - 1 if sign == 1 else -2**31
        # Update the result by appending the digit
        result = result * 10 + digit
        # Move to the next character
        index += 1
    # Return the result with the sign
    return result * sign
