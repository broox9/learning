#!/usr/env/bin python3
import sys

# print(
#     int(sys.argv[1]) / int(sys.argv[2])
# )

# what if I pass a string?

'''
be a good dev and handle expections properly and not generically
https://docs.python.org/3/library/exceptions.html

even packages have exception docs
requests:
docs.python-requests.org/en/master/_modules/requests/exceptions/
'''

try:
    print(int(sys.argv[1]) / int(sys.argv[2]))
except ValueError as e:
    print(f"Use Numbers buddy. {e}")
except ZeroDivisionError as e:
    print(f"Really? {e}?")
