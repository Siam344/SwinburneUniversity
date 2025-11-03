import operator

operations = [
    operator.add,   # +
    operator.sub,   # -
    operator.mul    # *
]

B = 2  

for A in range(-100, 101):  
    expectedOutcome = (A + B) * 2 - 5  
    isIneffective = False
    
    for i in range(3):
        for j in range(3):
            if i == 0 and j == 2:
                continue
            A_custom = operations[i](A, B)
            C_custom = operations[j](A_custom, B)
            C_custom = C_custom - 5  

            if expectedOutcome == C_custom:
                isIneffective = True
                break
        
        if isIneffective:
            break
    
    if isIneffective:
        print(f"A = {A}, B = {B} is ineffective in detecting operator errors.")
