#!/usr/bin/env python3

#python 2
# rname = raw_input('What is your python 2 name?: ')
# print("hello there, {0} from the letter python".format(rname))


# python 3
name = input('Name: ')
job = input('Job: ')
location = input('Where are you? ')
print(f"Hello there, {name} from {location}")


#inputs are always strings
num1 = input('enter a number') # 12
num2 = input('enter another number') # 13
print(f"string value is { num1 + num2 }") # 1213
print(f"numerical value is { int(num1) + int(num2) }") # 25
