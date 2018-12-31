#!/urs/bin/env python

# lists in python are normalish
# this stuff mutates
stuff = []
stuff.append('brookes')
stuff.append(9)
stuff.append({'height': 5.5, 'weight': 200 })

stuff.remove(9)
stuff.pop(0) # pop last by index

stuff.sort()
stuff.reverse()

len(stuff) # get length
stuff.count('brookes') # only 1 of those. doy.


# List Slicing - looks like Golang
# Mutates
l = [1,2,3,4,5,6,7,8,9]
l[2:5]  # [3,4,5] - endpoint not included
l[4:]   # [5,6,7,8,9]
l[:4]   # [1,2,3,4]
l[-4:]  # [6,7,8,9]
l[2:5] = ['a', 'b', 'c'] # [1,2,'a','b','c',6,7,8,9]


# List Comprehensions

#NORMAL WAY
zoo_animals = ['monkey', 'elephant', 'cow', 'chicken', 'horse', 'ferret', 'pig', 'aardvark']
food_animals = ['chicken', 'cow', 'pig']

not_food_animals = []

for animal in zoo_animals:
    if animal not in food_animals:
        not_food_animails.append(animal)


# CONSICE
un_food_animals = [animal for animal in zoo_animals if animal not in food_animals]

# OR

not_eating = [
    animal
    for animal in zoo_animals
    if animal not in food_animals
]


# Another example
sales = [3.99, 5.49, 69.88]
sales_with_tax = []
for sale in sales:
    sales_with_tax.append(sale * 1.07)

sales2 = [sale * 1.07 for sale in sales] # so basically it can act like a map or filter
