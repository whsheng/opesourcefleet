---
sidebar_position: 2
---

# Gateways & Routers

Communication devices that enable connectivity between vehicles and fleet management platforms.

## Overview

Gateways and routers provide the communication infrastructure needed to transmit data between vehicles and central fleet management systems.

## Types of Gateways

### Cellular Gateways

Devices that provide internet connectivity via cellular networks.

**Features:**
- 4G LTE / 5G connectivity
- Wi-Fi hotspot capability
- Multiple device support
- VPN support

**Use Cases:**
- Mobile office connectivity
- Real-time video streaming
- Multiple tracker aggregation

### Telematics Gateways

Specialized devices that collect and transmit vehicle data.

**Features:**
- CAN bus reading
- Multiple protocol support
- Edge computing capability
- Local data storage

**Popular Models:**
- AutoPi TMU CM4
- Samsara VG34
- Geotab GO9

### LoRaWAN Gateways

Long-range, low-power gateways for specific use cases.

**Use Cases:**
- Yard management
- Fixed asset tracking
- Low-power sensor networks

## Key Features

### Connectivity Options

| Technology | Range | Data Rate | Use Case |
|------------|-------|-----------|----------|
| 2G/3G | Wide | Low | Basic tracking |
| 4G LTE | Wide | High | Video, real-time |
| 5G | Wide | Very High | Autonomous, HD video |
| LoRa | Medium | Very Low | Sensors, yard |
| Satellite | Global | Low | Remote areas |

### Edge Computing

Modern gateways support edge computing capabilities:

- **Local Processing**: Process data before transmission
- **Filtering**: Reduce data volume
- **AI/ML**: Run machine learning models locally
- **Caching**: Store data during network outages

## Integration with Fleet Software

Gateways typically integrate via:

1. **Direct Protocol**: Native protocol support (e.g., Traccar protocol)
2. **API Integration**: REST APIs for data exchange
3. **MQTT**: Lightweight messaging protocol
4. **Cloud Connectors**: Direct cloud platform integration

## Security Considerations

- **VPN Support**: Secure communication channels
- **Certificate Management**: Device authentication
- **Firewall**: Network protection
- **OTA Updates**: Secure firmware updates

## Open Source Gateway Projects

### AutoPi

Open telematics platform with extensible capabilities.

- **Hardware**: Raspberry Pi based
- **Software**: Open source
- **Community**: Active development

### OpenVehicle Monitoring System (OVMS)

Open source vehicle monitoring system.

- **Focus**: Electric vehicles
- **Features**: CAN bus, GPS, cellular
- **Community**: EV enthusiast community
