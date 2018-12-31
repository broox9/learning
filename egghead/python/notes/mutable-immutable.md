### Mutable vs. Immutable

since everything has an id.  Things like Lists and Dicts are mutable but Strings, Ints, Tuples are not


```py
# MUTABLE
>>> b =[] # b is a list
>>> id(b)
4484916744
>>> b.append(9)
>>> id(b)
4484916744


# IMMUTABLE
>>> a = 9
>>> id(a)
4482130240
>>> a = a + 1
>>> id(a)
4482130272
```