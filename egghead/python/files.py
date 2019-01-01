#!/usr/bin/env python3

# ### READING
# # implied read and manual close
# f = open('animals.csv')
#
# for line in f:
#     print(line)
#
# # implied close, manual 'r' for read
# with open('animals.csv', 'r') as file:
#     print(file.read())

# nice csv and JSON packages
import csv
import json

with open('animals.csv', 'r') as f:
    animals = csv.reader(f)
    for row in animals:
        if row[-1] == 'True':
            print(f"{row[0]} the {row[1]} is allowed in the house")
        else:
            print(f"don't let {row[0]} the {row[1]} in this house!!")

with open('animals.json', 'r') as j:
    data = json.load(j)
    for obj in data:
        if obj['housebroken'] == 'True':
            print(f"{obj['name']} the {obj['type']} is allowed inside")
        else:
            print(f"{obj['name']} the {obj['type']} has to stay outside!!")


### WRITING
# 'w' overwrites, 'a' appends
w = open('cars.txt', 'w')
cars1 = ['bmw', 'lexus', 'mercedes']
for car in cars1:
    # at this point the file is emptied, but not written to just buffered
    w.write(car + '\n')

w.close() # actuall write happens on close


with open('cars.txt', 'a') as a:
    cars = ['chevy', 'ford', 'vw']
    for car in cars:
        a.write(car + '\n')


with open('cars.json', 'w') as wj:
    cars = [
        {"make": "chevy"},
        {"make": "tesla"},
        {"make": "amc"},
        {"make": "scion"}
    ]
    json.dump(cars, wj)
