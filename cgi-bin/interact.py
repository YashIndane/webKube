#!/usr/bin/python3

import cgi
import random
from subprocess import getoutput as go

print("content-type:text/plain")
print()

form_values = cgi.FieldStorage()

command = form_values.getvalue("cmd")
command = command.lower()

d = str(random.randint(1, 999))
pod_name = "pod" + d
dep_name = "dep" + d


if "pod" in command and "show" not in command:
  image_name = command.split(" ")[-2]
  status = go(f"sudo kubectl run {pod_name} --image={image_name} -- sleep infinity")
  print(status)

elif "deployment" in command and "show" not in command:
  image_name = command.split(" ")[-2]
  status = go(f"sudo kubectl create deployment {dep_name} --image={image_name} -- sleep infinity")
  print(status)

elif "show" in command and "deployment" in command:
  status = go("sudo kubectl get deployment")
  print(status)

elif "show" in command and "pod" in command:
  status = go("sudo kubectl get pods")
  print(status)
  
else:
  print("Not understood, Please try again")
