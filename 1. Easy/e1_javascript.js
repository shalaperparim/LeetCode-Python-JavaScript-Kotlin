// JavaScript solution
function twoSum(nums, target) {
    // Create a map to store the complements of each number
    const complements = new Map();
    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
      // Check if the current number is a complement of a previous number
      if (complements.has(nums[i])) {
        // Return the indices of the two numbers that add up to the target
        return [complements.get(nums[i]), i];
      }
      // Otherwise, store the complement of the current number and its index
      else {
        complements.set(target - nums[i], i);
      }
    }
    // If no solution is found, return an empty array
    return [];
  
    // Time complexity: O(n), where n is the length of the array
    // We only need to loop through the array once, and the map lookup and insertion are O(1) operations
  }
  