#!/usr/bin/python3

import cgi
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

name = form_values.getvalue("na")
type = form_values.getvalue("tys")

status = go(f"sudo kubectl delete {type} {name}")
print(status)
