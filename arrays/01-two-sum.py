from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        solution = []
        for num in nums:
            new_nums = nums.copy()
            new_nums.remove(num)
            if target - num in new_nums:
                solution.append(nums.index(num))
                solution.append(new_nums.index(target - num) + 1)
                break
        return solution

    def twoSum3(self, nums: List[int], target: int) -> List[int]:
        [nums.remove(num) for num in nums if num > target]
        for num in nums:
            new_nums = nums.copy()
            new_nums.remove(num)
            if target - num in new_nums:
                return [nums.index(num), new_nums.index(target - num) + 1]


if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    solution = Solution()
    assert solution.twoSum(nums, target) == [0, 1]
    assert solution.twoSum3(nums, target) == [0, 1]

    nums2 = [3, 2, 4]
    target2 = 6
    assert solution.twoSum(nums2, target2) == [1, 2]
    assert solution.twoSum3(nums2, target2) == [1, 2]

    nums3 = [3, 3]
    target3 = 6
    assert solution.twoSum(nums3, target3) == [0, 1]
    assert solution.twoSum3(nums3, target3) == [0, 1]

    nums4 = [3, 2, 3]
    target4 = 6
    assert solution.twoSum(nums4, target4) == [0, 2]
    assert solution.twoSum3(nums4, target4) == [0, 2]
