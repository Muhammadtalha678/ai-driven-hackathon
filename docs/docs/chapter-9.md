--- 
sidebar_position: 10
title: "Chapter Nine: The Hardware Stack"
description: "Compute, Power, and Communications."
---

# Chapter Nine: The Hardware Stack

*Compute, Power, and Communications.*

## Introduction

The brain needs a body, but it also needs blood (power) and nerves (comms).

### Compute
We usually have two levels:
1.  **Low-Level Controller (Real-time):** Microcontrollers (STM32, teensy) running at 1kHz to control motors.
2.  **High-Level AI (Inference):** GPUs or NPUs (Jetson Orin, Raspberry Pi 5) running vision and planning at 30-60Hz.

### Power Management
Batteries are heavy. Managing power density vs. operation time is the key bottleneck in modern robotics.

## Key Takeaways

1.  Understanding the core concept of **The Hardware Stack**.
2.  Recognizing the challenges in this specific domain.
3.  Preparing for the practical application in the next chapter.

:::tip Reflection
Think about how this chapter applies to a robot you might want to build.
:::
