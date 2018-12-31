#!/usr/bin/env python3

# == is for equality
# != is for inequality
# >, <, >=, <=

# Works with Lists!
greater_list = [1,2,4] > [1,2,3] # True 

# Boolean and infix operators
greater_bool = 1 < 2 and 5 > 4 # True
greater_bool = 1 < 2 or 5 > 4 # True 
greater_chaing = 3 < 10 < 20 # True

is_string = isinstance('Brookes', str) # True
is_float = isinstance(5.0, float) # True
is_int = isinstance(5.0, int) # False

# IS operator
true_1 = 4
true_2 = 4
same_ids = true_1 is true_2 # True because of the same ids id(true_1) == id(true_2)
list_1 = [1,2,3]
list_2 = [1,2,3]
same_list = list_1 is list_2 # False
same_list_values = list_1 == list_2 # True

# IN operator
one_is_there = 1 in list_2 # True
car = {'model': 'Chevy', 'year': 2018, 'color': 'black'}
if 'model' in car:
  print(f"this is a {car['model']}")