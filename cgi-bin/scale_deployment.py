#!/usr/bin/python3

import cgi
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

dep_name = form_values.getvalue("dn")
rep = form_values.getvalue("nr")

status = go(f"sudo kubectl scale deployment {dep_name} --replicas={rep}")
print(status)
