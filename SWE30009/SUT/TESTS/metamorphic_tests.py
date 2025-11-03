def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# MR1: Scaling all values by a constant
def test_mr1(bubble_sort_function):
    # Test case 1    
    original_input1 = [4, 2, 6]          
    scaled_input1 = [x * 3 for x in original_input1]
    sorted_scaled1 = bubble_sort_function(scaled_input1.copy())
    if bubble_sort(scaled_input1) != sorted_scaled1:
        return True

    # Test case 2
    original_input2 = [5, 3, 1, 7]      
    scaled_input2 = [x * 3 for x in original_input2]
    sorted_scaled2 = bubble_sort_function(scaled_input2.copy())
    if bubble_sort(scaled_input2) != sorted_scaled2:
        return True

    # Test case 3
    original_input3 = [10, 30, 20, 40]        
    scaled_input3 = [x * 3 for x in original_input3]
    sorted_original3 = bubble_sort_function(original_input3.copy())
    sorted_scaled3 = bubble_sort_function(scaled_input3.copy())
    if bubble_sort(scaled_input3) != sorted_scaled3:
        return True

    # Test case 4
    original_input4 = [9, 18, 12, 6, 15]      
    scaled_input4 = [x * 3 for x in original_input4]
    sorted_scaled4 = bubble_sort_function(scaled_input4.copy())
    if bubble_sort(scaled_input4) != sorted_scaled4:
        return True

    # Test case 5
    original_input5 =  [23, 7, 19, 11, 3]
    scaled_input5 = [x * 3 for x in original_input5]
    sorted_scaled5 = bubble_sort_function(scaled_input5.copy())
    if bubble_sort(scaled_input5) != sorted_scaled5:
        return True

    return False  # If all tests pass, the mutant is not killed


# MR2: Shifting all values by a constant
def test_mr2(bubble_sort_function):
    # Test case 1
    original_input1 = [7, 5, 3] 
    shifted_input1 = [x + 5 for x in original_input1]
    sorted_shifted1 = bubble_sort_function(shifted_input1.copy())
    if bubble_sort(shifted_input1) != sorted_shifted1:
        return True

    # Test case 2
    original_input2 = [7, 1, 5, 3]      
    shifted_input2 = [x + 5 for x in original_input2]
    sorted_shifted2 = bubble_sort_function(shifted_input2.copy())
    if bubble_sort(shifted_input2) != sorted_shifted2:
        return True

    # Test case 3
    original_input3 =  [40, 30, 20, 10]
    shifted_input3 = [x + 5 for x in original_input3]
    sorted_shifted3 = bubble_sort_function(shifted_input3.copy())
    if bubble_sort(shifted_input3) != sorted_shifted3:
        return True

    # Test case 4
    original_input4 = [15, 18, 12, 6, 9]
    shifted_input4 = [x + 5 for x in original_input4]
    sorted_shifted4 = bubble_sort_function(shifted_input4.copy())
    if bubble_sort(shifted_input4) != sorted_shifted4:
        return True

    # Test case 5
    original_input5 = [7, 3, 23, 19, 11]
    shifted_input5 = [x + 5 for x in original_input5]
    sorted_shifted5 = bubble_sort_function(shifted_input5.copy())
    if bubble_sort(shifted_input5) != sorted_shifted5:
        return True

    return False  # If all tests pass, the mutant is not killed

def metamorphic_relation1(input):
    scaled_input = [x * 3 for x in input]
    sorted = bubble_sort(scaled_input.copy())
    print("Input :",input)
    print("Scaled Input :",scaled_input)
    print("Sorted :",sorted)


def metamorphic_relation2(input):
    shifted_input = [x + 5 for x in input]
    sorted = bubble_sort(shifted_input.copy())
    print("Input :",input)
    print("Scaled Input :",shifted_input)
    print("Sorted :",sorted)


if __name__ == "__main__":
    MR1_testcases =  [[4, 2, 6],[5, 3, 1, 7],[10, 30, 20, 40], [9, 18, 12, 6, 15] , [23, 7, 19, 11, 3] ] 
    print("Metamorphic Relation 1")
    serial = 1
    for test_case in MR1_testcases:
            print("Test Case ",serial)
            serial += 1 
            metamorphic_relation1(test_case)
    MR2_testcases =  [[7, 5, 3], [7, 1, 5, 3] ,[40, 30, 20, 10], [15, 18, 12, 6, 9], [7, 3, 23, 19, 11]]
    print("Metamorphic Relation 2")
    serial = 1
    for test_case in MR2_testcases:
            print("Test Case ",serial)
            serial += 1 
            metamorphic_relation2(test_case)
