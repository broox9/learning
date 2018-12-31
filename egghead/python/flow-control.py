#!/usr/bin/env python3
x = int(input('enter a number: '))
y = x


# No switch or case statements
if x < 0:
  x = 0
  print('changed {0} to {1}'.format(y, x))

elif x == 0:
  print('zero')

elif x == 1:
  print('one')

else:
  print('Some other number')


# for loops
pets = ['cat', 'dog', 'elephant']

for pet in pets:
  print(f'this is my {pet}')


# range(start/range, [,end] [,step])
print(
  """
  # Ranges & For Loops
  # range(start/range, [,end] [,step])""")
for i in range(10, 1, -1): # won't print 1
  print(f'{i}...')


# For Loop with Break
for pet in pets:
  if pet == 'dog':
    print('got a dog!')
    break
  else:
    print(f'this {pet} is lovely')


# While loop
print("""
  # While Loop""")
w = 1
while x < 10:
  print(x)
  x = x + 1
