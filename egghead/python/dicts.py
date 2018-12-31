# DICTIONARIES
brookes = {}
brookes['age'] = 38
brookes['middle name'] = 'parker'
brookes['problems'] = 99

'middle name' in brookes # True

del brookes['problems']
print(brookes.get('problems', 'you dont want no problems'))

for key, value in brookes.items():
    print(key, value)
