#!/usr/bin/env python3

# always at least 3 nested scopes available by name
def whoami():
    def local_me():
        i = 'I am local groot'
        print(i)


    # using "nonlocal"
    def nonlocal_you():
        # overrites the local scope
        nonlocal j = 'You are you'

    # using global
    def global_me():
        # doesn't override the local scope
        global i = 'We are the world' # bad idea

    i = 'I am groot'
    j = 'You are groot'
    print(i) # I am groot
    print(j) # You am groot
    local_me() # I am local groot
    nonlocal_you()
    global_me()
    print(i) # I am groot
    pring(j) # 'You are you'




whoami()
print(i) # We are the world
