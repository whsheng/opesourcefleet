---
sidebar_position: 1
---

# GPS Tracking Devices

Dedicated GPS tracking hardware for fleet management applications.

## Overview

GPS tracking devices are specialized hardware units installed in vehicles to transmit location data and other telemetry to fleet management platforms.

## Types of GPS Trackers

### Hardwired Trackers

Permanently installed devices connected directly to vehicle power.

**Advantages:**
- Constant power supply
- Hidden installation (anti-theft)
- Access to vehicle systems
- Immobilizer capability

**Popular Models:**
- Queclink GV300
- Teltonika FMB920
- Concox GT06N

### OBD Trackers

Plug-and-play devices that connect to the OBD-II port.

**Advantages:**
- Easy installation
- Access to diagnostic data
- No wiring required
- Portable between vehicles

**Popular Models:**
- Vyncs GPS Tracker
- TrackPort 2.0
- AutoPi CM4

### Battery-Powered Trackers

Portable devices with internal batteries.

**Advantages:**
- No installation required
- Covert placement
- Asset tracking capability

**Considerations:**
- Battery life (days to months)
- Recharging requirements

## Key Specifications

When evaluating GPS trackers:

| Specification | Description |
|--------------|-------------|
| **GNSS** | GPS, GLONASS, Galileo, BeiDou support |
| **Update Frequency** | How often location is reported (1s to 1h) |
| **Cellular Bands** | 2G, 3G, 4G LTE, 5G support |
| **Inputs/Outputs** | Digital inputs, relay outputs, analog inputs |
| **Battery Backup** | Internal battery for power loss situations |
| **IP Rating** | Protection against dust and water |
| **Operating Temp** | Temperature range for operation |

## Protocol Support

Most GPS trackers use one of these protocols:
- **GT06 / GT02** - Common Chinese device protocol
- **TK103** - Widely supported protocol
- **Teltonika** - Proprietary binary protocol
- **HTTP/JSON** - Modern REST-based protocols

## Open Source Firmware

Some trackers support open-source firmware:

### OpenGPS
Community firmware for compatible MTK-based devices.

### Custom Firmware Development
Guides for developing custom firmware on supported hardware platforms.
