#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys
import telnetlib
from time import sleep
import random

HOST = "127.0.0.1"
PORT = 5554
TIMEOUT = 10
LAT_SRC = 52.5243700
LNG_SRC = 13.4105300
LAT_DST = 53.5753200
LNG_DST = 10.0153400
SECONDS = 120

LAT_MAX_STEP = ((max(LAT_DST, LAT_SRC) - min(LAT_DST, LAT_SRC)) / SECONDS) * 2
LNG_MAX_STEP = ((max(LNG_DST, LNG_SRC) - min(LNG_DST, LNG_SRC)) / SECONDS) * 2

DIRECTION_LAT = 1 if LAT_DST - LAT_SRC > 0 else -1
DIRECTION_LNG = 1 if LNG_DST - LNG_SRC > 0 else -1

lat = LAT_SRC
lng = LNG_SRC

tn = telnetlib.Telnet(HOST, PORT, TIMEOUT)
tn.set_debuglevel(9)
tn.read_until("OK", 5)