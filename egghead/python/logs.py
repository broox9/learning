#!/usr/bin/env python
import sys
import getopt
import logging

# logging.warning('logging is up in here now')
# logging.info('i wont show unless you set the logging level lower')

# Logging Levels
# critical
# error
# warning (default)
# info
# debug


# Do the config with the command line options
log_level = "INFO"

# create 2 arguments and slice the argv (since we know the file running the command is argv[0])
# then check for the text "l" or "log="
opts, args = getopt.getopt(sys.argv[1:], "l:", ["log="])

# get the appropriate level from "logging"
for opt, arg in opts:
    if opt in ("-l", "--log"):
        log_level= getattr(logging, arg.upper())

logging.basicConfig(filename='./demo.log', level=log_level, format='%(asctime)s %(levelname)s : %(message)s')

for i in range(0, 100):
    if i % 5 == 0:
        logging.debug("found a number divisible by 5: {0}".format(i)) # won't show unless level is lowered
    else:
        logging.info("At number {0}".format(i))
logging.warning('Finished logging sequence')


# in Command Line
# ./logs.py -l warn
# ./logs.py --log=debug
