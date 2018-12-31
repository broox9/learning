### Math

rounded division
```py
# python2 - for the crinimally insance
3 / 4
>>> 0 # rounded by default
3 / 4.
>>> 0.75 # gets the float

# python3 - the people's champ
3 / 4
>>> 0.75
3 // 4 
>>> 0 # rounded version
```

### String
normal double/single quote rules apply as well as tab/return characters

__Multiline Strings__ with carriage returns preserved.
```py
sentence = """Brookes
    was
    here y'all"""
sentence
>>> Brookes\nwas\nhere y\'all
```


__Interpolation__
```py
item = 'food'
where = 'here'
print("The %s is %s y'all", (item, where))
print("The {0} is {1}".format(item, where))
```

__String operations__
```py
sentence
# can also do this with vars obvi
"The ball is red".endswith("red")
str_index = "Yo Foo".find('F')
"".join(['the', 'ball', 'is', 'red])
# .strip(), lstrip(), rstrip(), etc
```

__See the methods__
```sh
>>> dir("Brookes")
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> help("Brookes".split)
```

