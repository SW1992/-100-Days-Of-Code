# Day Forty Five

# Python Loop Control
# there are two main statements in python for modifying the behaviour of loops
# relative to their normal sequence of execution, these are

# break 
# the break keyword can be used to stop a loop, prematurely, when a paticular condition is met
# the program will then carry on execution from the next statement that immediately follows the loop
for int in range(5,20,5):
    if int == 10:
        print("Break loop when number is equal to:", int)
        break
        # breaks loop when int reaches 10
        
# continue 
# the continue keyword can be used to skip execution of succeeding statements, when a paticular condition is met
# the loop will then jump to the next iteration, check the loop condition again & if it's still true, the loop will continue to iterate
for x in range(1,4):
    if x == 2:
        continue 
        # skips print statement, when loop is on second iteration
    print("the value of x is:", x)

# pass
# the pass keyword can also be used, but it has no behaviour
# it can be useful as a form of placeholder statement, when code is syntactically required, 
# but you either don't yet have, or don't want a statement to execute there
for char in "SQL":
    if char == "Q": 
        pass 
        print("No code for this yet")
    print(char)
    # S, "No code this yet", Q, L 


