### None(null)

check with the 'is' operator
```py
foo = None
if foo is None:
  print('Its basially null)
```

preferrably don't use == because in python everything has an id and a value.  __is__ does an id comparison.  == does a dict lookup and iterates through the dict to do a comparison so it's much slower
```py
id(foo)
>>>4043074786😜

# so much slower
if foo == None:
  print()
```