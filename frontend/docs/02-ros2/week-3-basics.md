---
sidebar_position: 1
---

# ROS 2 Basics

This week, we will cover the basics of ROS 2, the Robotic Nervous System.

## Middleware

ROS 2 is built on top of a Data Distribution Service (DDS) which provides a publish-subscribe messaging system. This allows for loose coupling between different parts of a robotic system.

## Nodes

A node is a process that performs computation. In ROS 2, a node is a fundamental unit of a ROS 2 system. It can be a sensor driver, a motor controller, an AI algorithm, etc.

## Topics

A topic is a named bus over which nodes exchange messages. Topics have anonymous publish/subscribe semantics, which means that the producer of the data does not know who is consuming it, and vice versa.

## Services

Services are another way for nodes to communicate with each other. They are based on a call-and-response model, as opposed to the one-way communication of topics.



## Bridging Python Agents to ROS controllers using rclpy



`rclpy` is the Python client library for ROS 2. It allows you to write ROS 2 nodes in Python. You can use `rclpy` to create nodes that publish and subscribe to topics, and to create service clients and servers. This is how you can bridge your Python-based AI agents to the ROS 2 world.

## Understanding URDF

URDF (Unified Robot Description Format) is an XML format for representing a robot model. It describes the physical properties of the robot, such as its links, joints, and sensors. URDF is essential for humanoid robots as it allows you to model the complex kinematics and dynamics of the robot.
