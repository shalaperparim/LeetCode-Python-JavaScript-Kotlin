// C# solution
public int[] TwoSum(int[] nums, int target) {
  // Create a dictionary to store the complements of each number
  var complements = new Dictionary<int, int>();
  // Loop through the array of numbers
  for (int i = 0; i < nums.Length; i++) {
    // Check if the current number is a complement of a previous number
    if (complements.ContainsKey(nums[i])) {
      // Return the indices of the two numbers that add up to the target
      return new int[] {complements[nums[i]], i};
    }
    // Otherwise, store the complement of the current number and its index
    else {
      complements[target - nums[i]] = i;
    }
  }
  // If no solution is found, return an empty array
  return new int[] {};

  // Time complexity: O(n), where n is the length of the array
  // We only need to loop through the array once, and the dictionary lookup and insertion are O(1) operations
}
