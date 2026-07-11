---
date: '3'
title: 'CLM-UAV'
cover: './clm_uav.png'
external: 'https://github.com/kyriosaa/clm-uav'
cta: 'https://github.com/kyriosaa/clm-uav'
tech:
  - Raspberry Pi Pico
  - MicroPython
  - Google Cloud
---

A real-time UAV telemetry system built on a Raspberry Pi Pico 2 W using MicroPython. Streams data to Google Cloud over MQTT with mutual TLS and visualized live on a Firebase-authenticated web dashboard with an interactive 3D drone model. Built with an emphasis on end-to-end IoT security: mTLS device authentication, per-device topic restrictions, and Firestore security rules.