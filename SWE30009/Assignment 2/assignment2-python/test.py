from assignment2 import split_and_sort

# List of test cases
test_cases = [
    [-100, -99, -98, -97],
    [34, 0, -1, 23, -45, 0, 89, 1],
    [50, -50, 50, -50, 50, -50],
    [10, 20, 30, 40, 50],
    [10, -9, 15, 7, 10, -5, 28],
    [i for i in range(-15, 15)]
]

# Run test cases
for idx, case in enumerate(test_cases, start=1):
    print(f"Test Case {idx}: Input = {case}")
    result = split_and_sort(case)
    print(f"Result: {result}\n")

