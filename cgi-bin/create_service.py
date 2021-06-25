#!/usr/bin/python3

import cgi
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

dep_name = form_values.getvalue("dn")
port = form_values.getvalue("po")
type = form_values.getvalue("tys")

status = go(f"sudo kubectl expose deployment {dep_name} --port={port} --type={type}")
print(status)

