#!/usr/bin/env python3

# implicit None return

def say_hi():
    print("hey there")


# implicit artument return "name"
def yell_name(name='Adrienne'):
    """
    this is a doc string
    also this function returns the arg by default
    """
    print("YO {0} ".format(name.upper()))


# scoping
def add(num1=0, num2=0):
    """
    adds the 2 numbers. doy
    """
    num1 = num1 + num2 # baaad idea but the scoping allows this
    print(num1)
    return num1

# named parameter
def madlibs(name, noun="shoes", adj="blue"):
    return f"{name} has {adj} {noun}"

say_hi()
yell_name()
print(madlibs('tracie', adj='suede', noun='shoes')) # keyword args out of order, or using normal positional args
# can't do this print(madlibs('tracie', adj='suede', 'shoes')) # once you start keywords, you have to finish
