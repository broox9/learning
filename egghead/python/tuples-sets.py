# TUPLES -- immutable lists basically
tup = 'dog', 'cat', 12.58 # ('dog', 'cat', 12.58 )
tup[0] # 'dog'
id(tup) # some id
tup = 'dog', 'cat', 12.58, { 'greet': 'yo whattup'} #('dog', 'cat', 12.58, { 'greet': 'yo whattup'} )
id(tup) # different id


# SETS, normal sets, no dupes
scranton = { 'pam' 'jim', 'stanley', 'jim', 'dwight', 'pam'}
# { 'pam' 'jim', 'stanley', 'dwight'}

'jim' in set # True
'jan' in set # False

#empty set
stamford = set()
stamford.add('andy')
stamford.add('karen')
stamford.add('ryan')
stamford.remove('ryan')

scranton.union(stamford)
