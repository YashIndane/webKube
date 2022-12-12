# webKube
Kubernetes playground with voice commands :microphone:

This is a WebApp build using Python-CGI and JS, to interact with `Kubernetes` and run `kubectl` commands (Voice input also supported!).

![webkube](https://user-images.githubusercontent.com/53041219/207014757-9ef2d6e8-7731-46f7-8327-9e1c30008186.png)

## Requirements

1. A Kubernetes cluster

Ansible role to configure Kubernetes cluster over AWS -> [link](https://github.com/YashIndane/multinode-K8S-cluster-configure-aws)

The WebApp runs on the `master` node.

2. httpd on master node

install by ->

```
$ yum install httpd -y
```

## Usage

The buttons given in left side, can be used to do various tasks.

For voice input ->

1. To launch a pod: example `Please launch a pod with fedora image`

2. To launch a deployment: example `Please launch a depoyment with fedora image`

3. To get pods: example `Can you show me pod`

4. To get deployment: example `Hey please show deployment`
