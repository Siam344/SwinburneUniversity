# Bubble Sort Algorithm
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

# Metamorphic Relation 1: Scaling all values by a constant
def test_mr1():
    # Original input and scaled input
    original_input = [2, 4, 6]
    scaled_input = [x * 3 for x in original_input]  # Scale by 3

    # Sort both inputs
    sorted_original = bubble_sort(original_input.copy())
    sorted_scaled = bubble_sort(scaled_input.copy())

    # Check if the relative order remains the same after scaling
    print("MR1 Test (Scaling):")
    print("Original input:", original_input)
    print("Sorted original:", sorted_original)
    print("Scaled input:", scaled_input)
    print("Sorted scaled:", sorted_scaled)
    print()

# Metamorphic Relation 2: Shifting all values by a constant
def test_mr2():
    # Original input and shifted input
    original_input = [3, 5, 7]
    shifted_input = [x + 5 for x in original_input]  # Shift by 5

    # Sort both inputs
    sorted_original = bubble_sort(original_input.copy())
    sorted_shifted = bubble_sort(shifted_input.copy())

    # Check if the relative order remains the same after shifting
    print("MR2 Test (Shifting):")
    print("Original input:", original_input)
    print("Sorted original:", sorted_original)
    print("Shifted input:", shifted_input)
    print("Sorted shifted:", sorted_shifted)
    print()

# Run both metamorphic tests
test_mr1()
test_mr2()
