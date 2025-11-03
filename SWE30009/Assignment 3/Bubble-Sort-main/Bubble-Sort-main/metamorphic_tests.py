from bubble import bubble_sort

# MR1: Scaling all values by a constant
def test_mr1(bubble_sort_function):
    # Test case 1
    original_input1 = [2, 4, 6]
    scaled_input1 = [x * 3 for x in original_input1]
    sorted_scaled1 = bubble_sort_function(scaled_input1.copy())
    if bubble_sort(scaled_input1) != sorted_scaled1:
        return True

    # Test case 2
    original_input2 = [1, 3, 5, 7]
    scaled_input2 = [x * 3 for x in original_input2]
    sorted_scaled2 = bubble_sort_function(scaled_input2.copy())
    if bubble_sort(scaled_input2) != sorted_scaled2:
        return True

    # Test case 3
    original_input3 = [10, 20, 30, 40]
    scaled_input3 = [x * 3 for x in original_input3]
    sorted_original3 = bubble_sort_function(original_input3.copy())
    sorted_scaled3 = bubble_sort_function(scaled_input3.copy())
    if bubble_sort(scaled_input3) != sorted_scaled3:
        return True

    # Test case 4
    original_input4 = [6, 9, 12, 15, 18]
    scaled_input4 = [x * 3 for x in original_input4]
    sorted_scaled4 = bubble_sort_function(scaled_input4.copy())
    if bubble_sort(scaled_input4) != sorted_scaled4:
        return True

    # Test case 5
    original_input5 = [3, 7, 11, 19, 23]
    scaled_input5 = [x * 3 for x in original_input5]
    sorted_scaled5 = bubble_sort_function(scaled_input5.copy())
    if bubble_sort(scaled_input5) != sorted_scaled5:
        return True

    return False  # If all tests pass, the mutant is not killed


# MR2: Shifting all values by a constant
def test_mr2(bubble_sort_function):
    # Test case 1
    original_input1 = [3, 5, 7]
    shifted_input1 = [x + 5 for x in original_input1]
    sorted_shifted1 = bubble_sort_function(shifted_input1.copy())
    if bubble_sort(shifted_input1) != sorted_shifted1:
        return True

    # Test case 2
    original_input2 = [1, 3, 5, 7]
    shifted_input2 = [x + 5 for x in original_input2]
    sorted_shifted2 = bubble_sort_function(shifted_input2.copy())
    if bubble_sort(shifted_input2) != sorted_shifted2:
        return True

    # Test case 3
    original_input3 = [10, 20, 30, 40]
    shifted_input3 = [x + 5 for x in original_input3]
    sorted_shifted3 = bubble_sort_function(shifted_input3.copy())
    if bubble_sort(shifted_input3) != sorted_shifted3:
        return True

    # Test case 4
    original_input4 = [6, 9, 12, 15, 18]
    shifted_input4 = [x + 5 for x in original_input4]
    sorted_shifted4 = bubble_sort_function(shifted_input4.copy())
    if bubble_sort(shifted_input4) != sorted_shifted4:
        return True

    # Test case 5
    original_input5 = [3, 7, 11, 19, 23]
    shifted_input5 = [x + 5 for x in original_input5]
    sorted_shifted5 = bubble_sort_function(shifted_input5.copy())
    if bubble_sort(shifted_input5) != sorted_shifted5:
        return True

    return False  # If all tests pass, the mutant is not killed

