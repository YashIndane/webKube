#!/usr/bin/python3

import cgi
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

pod_name = form_values.getvalue("pn")
image_name = form_values.getvalue("in")

status = go(f"sudo kubectl run {pod_name} --image={image_name} -- sleep infinity")

print(status)
