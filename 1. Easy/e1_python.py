# Python solution
def two_sum(nums, target):
  # Create a dictionary to store the complements of each number
  complements = {}
  # Loop through the array of numbers
  for i, num in enumerate(nums):
    # Check if the current number is a complement of a previous number
    if num in complements:
      # Return the indices of the two numbers that add up to the target
      return [complements[num], i]
    # Otherwise, store the complement of the current number and its index
    else:
      complements[target - num] = i
  # If no solution is found, return an empty array
  return []

# Time complexity: O(n), where n is the length of the array
# We only need to loop through the array once, and the dictionary lookup and insertion are O(1) operations
