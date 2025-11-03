def split_and_sort(nums):
    # Input validation for list length
    if len(nums) > 30:  # setting the limit to 30
        return "Error: Input list should contain less number integers."

    # Filter numbers into two separate lists, treat 0 as negative, and remove duplicates
    pos_nums = sorted(set(num for num in nums if num > 0))  # Remove duplicates using 'set'
    neg_nums = sorted(set(num for num in nums if num <= 0))  # Remove duplicates and include 0 as negative

    # Output the sorted lists
    print("Positive numbers:", pos_nums)
    print("Negative numbers:", neg_nums)

    return neg_nums, pos_nums


