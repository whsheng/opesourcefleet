---
sidebar_position: 2
---

# Custom & Proprietary Protocols

Documentation for vendor-specific and proprietary communication protocols.

## Overview

Proprietary protocols are developed by specific manufacturers and often offer advanced features not available in standard protocols.

## Teltonika Protocol

Teltonika uses a binary protocol with codec support for efficient data transmission.

### Connection

- **Port**: 5027 (default)
- **Transport**: TCP

### Protocol Structure

```
+--------+--------+--------+--------+--------+
| Data   | AVL    | Codec  | Number | AVL    |
| Length | ID     | ID     | of Data| Data   |
| 4 bytes| 1 byte | 1 byte | 1 byte | n bytes|
+--------+--------+--------+--------+--------+
```

### Codec Types

| Codec | Description |
|-------|-------------|
| 0x08 | Codec 8 (standard) |
| 0x8E | Codec 8 Extended |
| 0x10 | Codec 16 |

### AVL Data Elements

Codec 8 supports multiple IO elements:

| Property ID | Description |
|-------------|-------------|
| 1 | Digital Input 1 |
| 9 | Ignition |
| 66 | External Voltage |
| 67 | Battery Voltage |
| 199 | OBD Speed |
| 200 | OBD RPM |

### Server Response

The server must respond with the number of received data elements.

```
+--------+--------+
| AVL ID | Number |
| 1 byte | 1 byte |
+--------+--------+
```

## CalAmp Protocol

CalAmp devices use the LMDirect protocol.

### Message Types

1. **ACK** - Acknowledgment
2. **NACK** - Negative acknowledgment
3. **Report** - Position/event report
4. **Options** - Configuration options

### Report Format

```
+--------+--------+--------+--------+--------+
| Msg    | Options| Mobile | Comm   | Payload|
| Type   |        | ID     | Type   |        |
+--------+--------+--------+--------+--------+
```

## Implementing Custom Protocols

### When to Create a Custom Protocol

Consider a custom protocol when:
- Existing protocols don't meet requirements
- You need specific optimizations
- You're building proprietary hardware
- Security requirements demand custom encryption

### Design Principles

1. **Efficiency**: Minimize bandwidth usage
2. **Reliability**: Include checksums and acknowledgments
3. **Extensibility**: Design for future additions
4. **Security**: Include authentication and encryption
5. **Debugging**: Include human-readable elements

### Binary vs Text Protocols

| Aspect | Binary | Text |
|--------|--------|------|
| Size | Small | Larger |
| Readability | Hard | Easy |
| Parsing Speed | Fast | Slower |
| Debugging | Harder | Easier |
| Extensibility | Schema-based | Flexible |

### Example Custom Protocol (Text-based)

```
$FMS,v1,DEVICE123,20231124121212,GPS:22.5678,113.9012,45,12.5,IO:1:1;2:0;66:12400\r\n
```

Format:
```
$FMS,(version),(device_id),(timestamp),GPS:(lat),(lon),(speed),(alt),IO:(io_data)\r\n
```

### Example Custom Protocol (Binary)

```
+--------+--------+--------+--------+--------+--------+
| Magic  | Ver    | Len    | Device | Payload| CRC16  |
| 0xF1F2 | 1 byte | 2 bytes| 8 bytes| n bytes| 2 bytes|
+--------+--------+--------+--------+--------+--------+
```

## Tools for Protocol Development

### Packet Analyzers
- Wireshark
- tcpdump
- Custom protocol analyzers

### Testing Tools
- Protocol simulators
- Device emulators
- Load testing tools

### Debugging
- Hex viewers
- Binary diff tools
- Logging frameworks
