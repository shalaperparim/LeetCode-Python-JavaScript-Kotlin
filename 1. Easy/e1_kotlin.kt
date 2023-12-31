// Kotlin solution
fun twoSum(nums: IntArray, target: Int): IntArray {
  // Create a map to store the complements of each number
  val complements = mutableMapOf<Int, Int>()
  // Loop through the array of numbers
  for (i in nums.indices) {
    // Check if the current number is a complement of a previous number
    if (complements.containsKey(nums[i])) {
      // Return the indices of the two numbers that add up to the target
      return intArrayOf(complements[nums[i]]!!, i)
    }
    // Otherwise, store the complement of the current number and its index
    else {
      complements[target - nums[i]] = i
    }
  }
  // If no solution is found, return an empty array
  return intArrayOf()

  // Time complexity: O(n), where n is the length of the array
  // We only need to loop through the array once, and the map lookup and insertion are O(1) operations
}
