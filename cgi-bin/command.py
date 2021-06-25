#!/usr/bin/python3

import cgi
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

cmd = form_values.getvalue("cmd")

if "kubectl" in cmd :
  status = go(f"sudo {cmd}")
else:
  status = "only kubectl commands allowed"
print(status)
