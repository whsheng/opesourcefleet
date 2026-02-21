---
sidebar_position: 1
---

# Standard Protocols

Documentation for widely adopted GPS tracking protocols.

## Overview

Standard protocols are supported by multiple device manufacturers and fleet management platforms, making them ideal for interoperability.

## GT06 Protocol

The GT06 protocol is widely used by Chinese GPS tracker manufacturers.

### Connection

Devices typically connect via TCP on port 5023.

### Message Format

```
+--------+--------+--------+--------+--------+--------+--------+
| Start  | Length |  IMEI  | Command|  Data  |  Info  |  Stop  |
| 0x7878 | 1 byte | 8 bytes| 1 byte | n bytes| 2 bytes| 0x0D0A |
+--------+--------+--------+--------+--------+--------+--------+
```

### Common Commands

| Command | Description |
|---------|-------------|
| 0x01 | Login Message |
| 0x12 | Location Data |
| 0x13 | Status Information |
| 0x15 | String Information |

### Server Response

The server should respond to login messages with an acknowledgment.

## TK103 Protocol

The TK103 protocol and its variants are used by many GPS tracking devices.

### Connection Modes

1. **SMS Mode** - Commands via SMS
2. **GPRS Mode** - Data over TCP/UDP

### GPRS Format

```
$(DeviceID),(Command),(Data)#)
```

### Common Commands

| Command | Description |
|---------|-------------|
| BP00 | Handshake |
| BR00 | Location Data |
| BO01 | Alarm Data |

### Example Messages

```
# Login
$(123456789012,BP00)#

# Location
$(123456789012,BR00,241123,A,2234.0232,N,11354.4565,E,0.0,45.0,241123,FFF7FBFF)#)
```

## H02 Protocol

Used by many entry-level Chinese GPS trackers.

### Format

```
*HQ,(DeviceID),(Command),(Data)#)
```

### Example

```
*HQ,1234567890,V1,123456,A,2234.0232,N,11354.4565,E,0.00,45,231124,FFFFBBFF#
```

## Meitrack Protocol

Protocol for Meitrack GPS devices.

### Message Format

```
$$B+(Message),(IMEI),(Data)\r\n
```

### Command Examples

```
$$B863070014494362,AAA,35,23.113643,113.358345,231124121212,A,9,19,0,248,1.1,89,3498969,460,0,9459,45011,83#
```

## Protocol Comparison

| Feature | GT06 | TK103 | H02 | Meitrack |
|---------|------|-------|-----|----------|
| Binary | Yes | No | No | No |
| Compact | Yes | Medium | Medium | No |
| Extensible | Yes | Limited | Limited | Yes |
| Checksum | Yes | Limited | No | Yes |

## Implementation Tips

1. **Port Management**: Use different ports for different protocols
2. **Buffering**: Implement proper message buffering
3. **Error Handling**: Handle malformed messages gracefully
4. **Logging**: Log raw messages for debugging
5. **Testing**: Test with real devices, not just documentation
