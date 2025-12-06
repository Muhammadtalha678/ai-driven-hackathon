--- 
sidebar_position: 5
title: "Chapter Four: Locomotion and Balance"
description: "The physics of walking: ZMP, MPC, and Whole-Body Control."
---

# Chapter Four: Locomotion and Balance

*The physics of walking: ZMP, MPC, and Whole-Body Control.*

## Introduction

Walking is controlled falling. For a bipedal robot, staying upright is an active, continuous process.

### The Zero Moment Point (ZMP)
Classically, we ensured stability by keeping the ZMP within the support polygon (the feet). If it leaves that area, the robot tips over.

### Model Predictive Control (MPC)
Modern robots plan several steps ahead. MPC solves an optimization problem in real-time: "Given my current state and physics constraints, what motor torques will keep me balanced for the next 2 seconds?"

## Key Takeaways

1.  Understanding the core concept of **Locomotion and Balance**.
2.  Recognizing the challenges in this specific domain.
3.  Preparing for the practical application in the next chapter.

:::tip Reflection
Think about how this chapter applies to a robot you might want to build.
:::
