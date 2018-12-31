# Python

## Getting Started with Python

install virtual environment if it's not there
```py
pip3 install virtualenv
```

create virtual environment if it's not created (this one is named "py3" and is pointed at the python3 binary).  This creates a folder called "py3" and has the python binary and other goodies in it. Probably shouldn't check this into git/vcs
```py
virtualenv py3 -p /usr/local/bin/python3
```

source the virtual environment from the folder it was created in. ("learning/egghead/python" in this case).  The promp should reflect the new environment
```py
source py3/bin/activate
```


...and to deactivate
```py
deactivate
```


### Environment Dependencies

install some junk
```py
pip/pip3 install requests
```


freeze it and pipe the ouput to requirements.txt This would be checked in.
```py
pip freeze > requirements.txt
```