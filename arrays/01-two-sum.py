from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}
        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in nums_map:
                return [nums_map[remaining], i]
            nums_map[num] = i


if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    solution = Solution()
    assert solution.twoSum(nums, target) == [0, 1]

    nums2 = [3, 2, 4]
    target2 = 6
    assert solution.twoSum(nums2, target2) == [1, 2]

    nums3 = [3, 3]
    target3 = 6
    assert solution.twoSum(nums3, target3) == [0, 1]

    nums4 = [3, 2, 3]
    target4 = 6
    assert solution.twoSum(nums4, target4) == [0, 2]

    nums5 = [0, 4, 3, 0]
    target5 = 0
    assert solution.twoSum(nums5, target5) == [0, 3]
