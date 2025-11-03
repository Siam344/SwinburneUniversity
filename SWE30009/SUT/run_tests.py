from Bubble_Sort_main.bubble import bubble_sort
from MUTANTS.mutated_functions import (
    mutant1, mutant2, mutant3, mutant4, mutant5, mutant6, mutant7,
    mutant8, mutant9, mutant10, mutant11, mutant12, mutant13, mutant14,
    mutant15, mutant16, mutant17, mutant18, mutant19, mutant20, mutant21,
    mutant22, mutant23, mutant24, mutant25, mutant26, mutant27, mutant28,
    mutant29, mutant30
)
from TESTS.metamorphic_tests import test_mr1, test_mr2


def run_mutation_tests():
    # List of all bubble sort functions (original + mutants)
    mutants = [mutant1, mutant2, mutant3, mutant4, mutant5, mutant6, mutant7,
               mutant8, mutant9, mutant10, mutant11, mutant12, mutant13, mutant14,
               mutant15, mutant16, mutant17, mutant18, mutant19, mutant20, mutant21,
               mutant22, mutant23, mutant24, mutant25, mutant26, mutant27, mutant28,
               mutant29, mutant30]

    # Track killed mutants and which MR test killed them
    killed_mutants = []
    killed , prev  = 0 , 0
    print(f"--- Testing Original Bubble Sort Function ---")
    # Run MR tests on original bubble sort function
    mr1_killed = test_mr1(bubble_sort)
    mr2_killed = test_mr2(bubble_sort)
    if mr1_killed:
        killed_mutants.append(('Original', 'MR1'))
    if mr2_killed:
        killed_mutants.append(('Original', 'MR2'))

    # Run MR tests on all mutants
    for idx, sort_func in enumerate(mutants, start=1):  # Start the index from 1 for mutants
        print(f"--- Testing Mutant Bubble Sort Function #{idx} ---")

        # Run MR1 test
        mr1_killed = test_mr1(sort_func)
        if mr1_killed:
            killed_mutants.append((idx, 'MR1'))

        # Run MR2 test
        mr2_killed = test_mr2(sort_func)
        if mr2_killed:
            killed_mutants.append((idx, 'MR2'))

    # Analysis: Display which mutants were killed and by which MR
    print("\n--- Mutation Testing Analysis ---")
    if not killed_mutants:
        print("No mutants were killed.")
    else:
        for mutant_idx, mr in killed_mutants:
            if mutant_idx == 'Original':
                print(f"Original Bubble Sort was killed by {mr}.")
            else:
                print(f"Mutant #{mutant_idx} was killed by {mr}.")
                if(mutant_idx != prev):
                    killed += 1
                prev = mutant_idx
    return killed


# Run the mutation tests
if __name__ == "__main__":
    import math
    total_mutants = 30
    Num_of_killed_mutants = run_mutation_tests()
    score = (Num_of_killed_mutants / total_mutants) * 100
    
    # One line gap before displaying the mutation score
    print("\nMutation score: ", math.ceil(score),"%")


